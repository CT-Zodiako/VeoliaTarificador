import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { google, sheets_v4 } from 'googleapis';
import { GoogleAuth, OAuth2Client } from 'google-auth-library';
import * as path from 'path';

@Injectable()
export class DriveService {
  private sheets: sheets_v4.Sheets;

  async authSheets() {
    try {
      // Ajustamos la ruta para funcionar en src/ y dist/
      const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '{}');     

      const auth = new GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const authClient = (await auth.getClient()) as OAuth2Client;

      this.sheets = google.sheets({ version: 'v4', auth: authClient });
    } catch (error) {
      console.error('❌ Error autenticando Google Sheets:', error);
      throw new InternalServerErrorException('Error autenticando Google Sheets');
    }
  }

  async consultarArchivo(idFile: string, sheet: string) {
    try {
      if (!this.sheets) {
        await this.authSheets();
      }

      const getRows = await this.sheets.spreadsheets.values.get({
        spreadsheetId: idFile,
        range: sheet,
      });

      return getRows.data;
    } catch (error) {
      console.error(`❌ Error consultando archivo: ${idFile}, Hoja: ${sheet}`, error);
      throw new InternalServerErrorException('Error al consultar el archivo en Google Sheets');
    }
  }
}
