export interface Banco {
  id: string;
  nombre: string;
  codigo: string;
  icono: string;
  tipo?: 'banco' | 'billetera';
}

export interface MedioDePago {
  id: string;
  bancoId: string;
  nombre: string;
  icono: string;
  tipo: 'llave' | 'bolsillo';
  valorLlave?: string;
  saldoDisponible?: string;
}

const BANCOS_FALLBACK: Banco[] = [
  {
    id: 'nequi',
    nombre: 'Nequi',
    codigo: '1507',
    icono: '/nequi_icon.png',
    tipo: 'billetera'
  },
  {
    id: 'bancobogota',
    nombre: 'Banco de Bogotá',
    codigo: '1001',
    icono: '/bancobogota_icon.png',
    tipo: 'banco'
  },
  {
    id: 'bancolombia',
    nombre: 'Bancolombia',
    codigo: '1007',
    icono: '/bancolombia_icon.jpg',
    tipo: 'banco'
  },
  {
    id: 'davivienda',
    nombre: 'Davivienda',
    codigo: '1051',
    icono: '/davivienda_icon.png',
    tipo: 'banco'
  },
  {
    id: 'bbva',
    nombre: 'BBVA Colombia',
    codigo: '1013',
    icono: '/bbva_icon.png',
    tipo: 'banco'
  },
  {
    id: 'nu',
    nombre: 'Nu Colombia',
    codigo: '1552',
    icono: '/nubank_icon.png',
    tipo: 'banco'
  }
];

const INITIAL_MEDIOS_DE_PAGO: MedioDePago[] = [
  {
    id: 'nequi-1',
    bancoId: 'nequi',
    nombre: 'Nequi',
    icono: '/nequi_icon.png',
    tipo: 'llave',
    valorLlave: '311 387 7395'
  },
  {
    id: 'bogota-2',
    bancoId: 'bancobogota',
    nombre: 'Banco de Bogotá',
    icono: '/bancobogota_icon.png',
    tipo: 'llave',
    valorLlave: '10073598'
  },
  {
    id: 'bolsillo-3',
    bancoId: 'bolsillo',
    nombre: 'Saldo en mi bolsillo',
    icono: 'wallet',
    tipo: 'bolsillo',
    saldoDisponible: '$157,433.58'
  }
];

// Mapeo para actualizar iconos antiguos si estaban en localStorage
const ICON_MAP: Record<string, string> = {
  nequi: '/nequi_icon.png',
  bancobogota: '/bancobogota_icon.png',
  bancolombia: '/bancolombia_icon.jpg',
  davivienda: '/davivienda_icon.png',
  bbva: '/bbva_icon.png',
  nu: '/nubank_icon.png',
};

/**
 * SEMIAPI para consultar lista de bancos y medios de pago inscritos.
 */
export const bancosService = {
  /**
   * Consulta la lista de bancos desde el JSON en /data/bancos.json
   */
  async getBancos(): Promise<Banco[]> {
    try {
      const response = await fetch('/data/bancos.json');
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const data: Banco[] = await response.json();
      return data;
    } catch (err) {
      console.warn('Usando datos de respaldo para bancos:', err);
      return BANCOS_FALLBACK;
    }
  },

  /**
   * Obtiene los medios de pago (llaves inscritas + bolsillos)
   */
  async getMediosDePago(): Promise<MedioDePago[]> {
    const stored = localStorage.getItem('enlace_medios_pago');
    if (stored) {
      try {
        const parsed: MedioDePago[] = JSON.parse(stored);
        // Actualizar iconos de llaves existentes con los nuevos logos de public/
        return parsed.map((m) => {
          if (m.tipo === 'llave' && ICON_MAP[m.bancoId]) {
            return { ...m, icono: ICON_MAP[m.bancoId] };
          }
          return m;
        });
      } catch (e) {
        console.error('Error parseando medios de pago guardados', e);
      }
    }
    return INITIAL_MEDIOS_DE_PAGO;
  },

  /**
   * Guarda o actualiza la lista de medios de pago
   */
  async saveMediosDePago(medios: MedioDePago[]): Promise<void> {
    localStorage.setItem('enlace_medios_pago', JSON.stringify(medios));
  },

  /**
   * Inscribe una nueva llave
   */
  async inscribirLlave(banco: Banco, valorLlave: string): Promise<MedioDePago> {
    const current = await this.getMediosDePago();
    const nueva: MedioDePago = {
      id: `${banco.id}-${Date.now()}`,
      bancoId: banco.id,
      nombre: banco.nombre,
      icono: banco.icono,
      tipo: 'llave',
      valorLlave
    };
    const updated = [nueva, ...current];
    await this.saveMediosDePago(updated);
    return nueva;
  }
};
