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
            // Page size and margins
            pageSize: 'A4',
            pageMargins: [40, 80, 40, 80],

            // Content of the PDF
            content: [
                // Table content
                {
                    table: {
                        widths: ['*', '*'],
                        body: [
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            ['Customer Name', 'ANUJ'],
                            ['Customer Email', 'customerDetails.email'],
                            // Add more rows as needed
                        ],
                    },
                    layout: 'noBorders', // Removes table borders
                    margin: [40, 0],
                },
            ],

            // Page header and footer
            header: (currentPage: any, pageCount: any, pageSize: any) => {
                // Define multiple rows of data in the header
                let headerData = [
                    {
                        text: 'Header Row 1',
                        style: 'header',
                        margin: [40, 10, 40, 0],
                    },
                    {
                        text: 'Header Row 2',
                        style: 'header',
                        margin: [40, 0, 40, 0],
                    },
                    {
                        text: 'Header Row 3',
                        style: 'header',
                        margin: [40, 0, 40, 0],
                    },
                ];

                return headerData;
            },
            footer: (currentPage: any, pageCount: any) => {
                return [
                    {
                        text: 'Footer Row 1',
                        style: 'footer',
                        margin: [40, 0, 40, 0],
                    },
                    {
                        text: 'Footer Row 2',
                        style: 'footer',
                        margin: [40, 0, 40, 0],
                    },
                    {
                        text: 'Footer Row 3',
                        style: 'footer',
                        margin: [40, 0, 40, 0],
                    },
                    ,
                    {
                        text: 'Page ' + currentPage.toString() + ' of ' + pageCount,
                        alignment: 'center',
                    },
                ];
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
