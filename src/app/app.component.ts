import { Component } from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

class Product {
  name: string = '';
  price: number = 0;
  qty: number = 0;
}
class Invoice {
  customerName: string = 'Abhishek Jaiswal Kumar';
  address: string = 'Maharajganj Patna City, Patna, Bihar';
  contactNo: number = 9852465112;
  email: string = 'abhishekjaiswal@gmail.com';

  products: Product[] = [];
  additionalDetails: string = '';

  constructor() {
    // Initially one empty product row we will show
    for (let i = 1; i <= 30; i++)
      this.products.push({
        name: 'Product ' + i,
        qty: i,
        price: i * 2,
      });
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  invoice = new Invoice();
  constructor() {
    (window as any).pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  generatePDF(action = 'open') {
    let docDefinition: any = {
      header: {
        margin: 8,
        columns: [
          {
            table: {
              widths: ['100%'],
              height: ['20%'],
              body: [
                [
                  {
                    text: 'ELECTRONIC SHOP',
                    fontSize: 16,
                    alignment: 'center',
                    color: '#047886',
                  },
                ],
                [
                  {
                    text: 'INVOICE',
                    fontSize: 20,
                    bold: true,
                    alignment: 'center',
                    decoration: 'underline',
                    color: 'skyblue',
                  },
                ],
              ],
            },
            layout: 'noBorders',
          },
          // {
          //   text: 'ELECTRONIC SHOP',
          //   fontSize: 16,
          //   alignment: 'center',
          //   color: '#047886',
          // },
          // {
          //   text: 'INVOICE',
          //   fontSize: 20,
          //   bold: true,
          //   alignment: 'center',
          //   decoration: 'underline',
          //   color: 'skyblue',
          // },
          // {
          //   text: 'Customer Details',
          //   style: 'sectionHeader',
          // },
        ],
      },
      content: [
        {
          text: 'ELECTRONIC SHOP',
          fontSize: 16,
          alignment: 'center',
          color: '#047886',
        },
        {
          text: 'INVOICE',
          fontSize: 20,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: 'skyblue',
        },
        {
          text: 'Customer Details',
          style: 'sectionHeader',
        },
        {
          columns: [
            [
              {
                text: this.invoice.customerName,
                bold: true,
              },
              { text: this.invoice.address },
              { text: this.invoice.email },
              { text: this.invoice.contactNo },
            ],
            [
              {
                text: `Date: ${new Date().toLocaleString()}`,
                alignment: 'right',
              },
              {
                text: `Bill No : ${(Math.random() * 1000).toFixed(0)}`,
                alignment: 'right',
              },
            ],
          ],
        },
        {
          text: 'Order Details',
          style: 'sectionHeader',
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto', 'auto'],
            body: [
              ['Product', 'Price', 'Quantity', 'Amount'],
              ...this.invoice.products.map((p) => [
                p.name,
                p.price,
                p.qty,
                (p.price * p.qty).toFixed(2),
              ]),
              [
                { text: 'Total Amount', colSpan: 3 },
                {},
                {},
                this.invoice.products
                  .reduce((sum, p) => sum + p.qty * p.price, 0)
                  .toFixed(2),
              ],
            ],
          },
        },
        {
          text: 'Additional Details',
          style: 'sectionHeader',
        },
        {
          text: this.invoice.additionalDetails,
          margin: [0, 0, 0, 15],
        },
        {
          columns: [
            [{ qr: `${this.invoice.customerName}`, fit: '50' }],
            [{ text: 'Signature', alignment: 'right', italics: true }],
          ],
        },
        {
          text: 'Terms and Conditions',
          style: 'sectionHeader',
        },
        {
          ul: [
            'Order can be return in max 10 days.',
            'Warrenty of the product will be subject to the manufacturer terms and conditions.',
            'This is system generated invoice.',
          ],
        },
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15, 0, 15],
        },
      },
    };

    if (action === 'download') {
      pdfMake.createPdf(docDefinition).download();
    } else if (action === 'print') {
      pdfMake.createPdf(docDefinition).print();
    } else {
      pdfMake.createPdf(docDefinition).open();
    }
  }

  addProduct() {
    this.invoice.products.push(new Product());
  }
}
