import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ApsModule } from './aps/aps.module';
import { EmpresasModule } from './empresas/empresas.module';
import { RellenosModule } from './rellenos/rellenos.module';
import { SubsidiosContribucionesModule } from './subsidios-contribuciones/subsidios-contribuciones.module';
import { FacturacionInformesComercialesModule } from './facturacion-informes-comerciales/facturacion-informes-comerciales.module';
import { RevercionesInformesComercialesModule } from './reverciones-informes-comerciales/reverciones-informes-comerciales.module';
import { CostoPodaModule } from './informes-gerenciales/costo-poda/costo-poda.module';
import { DashboardModule } from './informes-gerenciales/dashboard/dashboard.module';
import { DetalladoSubAporteModule } from './informes-gerenciales/detallado-sub-aporte/detallado-sub-aporte.module';
import { DetalladoCostoModule } from './informes-gerenciales/detallado-costo/detallado-costo.module';
import { DetalladoTarifasModule } from './informes-gerenciales/detallado-tarifas/detallado-tarifas.module';
import { GeneralesModule } from './informes-proyecciones/generales/generales.module';
import { VariablesPgirsModule } from './pgirs/variables-pgirs/variables-pgirs.module';
import { ResumenVariablesPgirsModule } from './pgirs/resumen-variables-pgirs/resumen-variables-pgirs.module';
import { PgirsVariablesModule } from './pgirs/pgirs-variables/pgirs-variables.module';
import { FormatosFormulariosModule } from './reporteador-sui/formatos-formularios/formatos-formularios.module';
import { DashboardReporteadorModule } from './reporteador-sui/dashboard/dashboard.module';
import { ResumenFormatosFormulariosModule } from './reporteador-sui/resumen-formatos-formularios/resumen-formatos-formularios.module';
import { ReversionesModule } from './reporteador-sui/reversiones/reversiones.module';
import { IndiceCraModule} from './suministros/indice-cra/indice-cra.module';
import {ReversionesSuministrosModule} from './suministros/reversiones-suministros/reversiones-suministros.module';
import { VerificacionModule } from './suministros/verificacion/verificacion.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      serviceName: process.env.DB_SERVICE, // Cambiado de 'database' a 'serviceName'
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
    }),
    AuthModule,
    ApsModule,
    EmpresasModule,
    RellenosModule,
    SubsidiosContribucionesModule,
    FacturacionInformesComercialesModule,
    RevercionesInformesComercialesModule,
    CostoPodaModule,
    DashboardModule,
    DetalladoSubAporteModule,
    DetalladoCostoModule,
    DetalladoTarifasModule,
    GeneralesModule,
    VariablesPgirsModule,
    ResumenVariablesPgirsModule,
    PgirsVariablesModule,
    FormatosFormulariosModule,
    DashboardReporteadorModule,
    ResumenFormatosFormulariosModule,
    ReversionesModule,
    IndiceCraModule,
    ReversionesSuministrosModule,
    VerificacionModule

  ],
})
export class AppModule {}
