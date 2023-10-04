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
        // let docDefinition: any = {
        //     // Page size and margins
        //     pageSize: 'A4',
        //     pageMargins: [40, 80, 40, 80],

        //     // Content of the PDF
        //     content: [
        //         // Table content
        //         {
        //             table: {
        //                 widths: ['*', '*'],
        //                 body: [
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     ['Customer Name', 'ANUJ'],
        //                     ['Customer Email', 'customerDetails.email'],
        //                     // Add more rows as needed
        //                 ],
        //             },
        //             layout: 'noBorders', // Removes table borders
        //             margin: [40, 0],
        //         },
        //     ],

        //     // Page header and footer
        //     header: (currentPage: any, pageCount: any, pageSize: any) => {
        //         // Define multiple rows of data in the header
        //         let headerData = [
        //             {
        //                 text: 'Header Row 1',
        //                 style: 'header',
        //                 margin: [40, 10, 40, 0],
        //             },
        //             {
        //                 text: 'Header Row 2',
        //                 style: 'header',
        //                 margin: [40, 0, 40, 0],
        //             },
        //             {
        //                 text: 'Header Row 3',
        //                 style: 'header',
        //                 margin: [40, 0, 40, 0],
        //             },
        //         ];

        //         return headerData;
        //     },
        //     footer: (currentPage: any, pageCount: any) => {
        //         return [
        //             {
        //                 text: 'Footer Row 1',
        //                 style: 'footer',
        //                 margin: [40, 0, 40, 0],
        //             },
        //             {
        //                 text: 'Footer Row 2',
        //                 style: 'footer',
        //                 margin: [40, 0, 40, 0],
        //             },
        //             {
        //                 text: 'Footer Row 3',
        //                 style: 'footer',
        //                 margin: [40, 0, 40, 0],
        //             },
        //             ,
        //             {
        //                 text: 'Page ' + currentPage.toString() + ' of ' + pageCount,
        //                 alignment: 'center',
        //             },
        //         ];
        //     },
        // };

        let patientInfo = {
            name: 'John Doe',
            dateOfBirth: 'January 1, 1980',
            notes: 'Patient is currently under medication.',
        };

        let tests = [
            { testName: 'Complete Blood Count (CBC)', referenceRange: 'Normal', result: 'Normal' },
            { testName: 'Blood Glucose Level', referenceRange: '70-100 mg/dL', result: '95 mg/dL' },
            { testName: 'Complete Blood Count (CBC)', referenceRange: 'Normal', result: 'Normal' },
            { testName: 'Blood Glucose Level', referenceRange: '70-100 mg/dL', result: '95 mg/dL' },
            { testName: 'Complete Blood Count (CBC)', referenceRange: 'Normal', result: 'Normal' },
            { testName: 'Blood Glucose Level', referenceRange: '70-100 mg/dL', result: '95 mg/dL' },
            { testName: 'Complete Blood Count (CBC)', referenceRange: 'Normal', result: 'Normal' },
            { testName: 'Blood Glucose Level', referenceRange: '70-100 mg/dL', result: '95 mg/dL' },
            { testName: 'Complete Blood Count (CBC)', referenceRange: 'Normal', result: 'Normal' },
            { testName: 'Blood Glucose Level', referenceRange: '70-100 mg/dL', result: '95 mg/dL' },
            { testName: 'Complete Blood Count (CBC)', referenceRange: 'Normal', result: 'Normal' },
            { testName: 'Blood Glucose Level', referenceRange: '70-100 mg/dL', result: '95 mg/dL' },
            { testName: 'Complete Blood Count (CBC)', referenceRange: 'Normal', result: 'Normal' },
            { testName: 'Blood Glucose Level', referenceRange: '70-100 mg/dL', result: '95 mg/dL' },
            { testName: 'Complete Blood Count (CBC)', referenceRange: 'Normal', result: 'Normal' },
            { testName: 'Blood Glucose Level', referenceRange: '70-100 mg/dL', result: '95 mg/dL' },
            { testName: 'Complete Blood Count (CBC)', referenceRange: 'Normal', result: 'Normal' },
            { testName: 'Blood Glucose Level', referenceRange: '70-100 mg/dL', result: '95 mg/dL' },
            { testName: 'Complete Blood Count (CBC)', referenceRange: 'Normal', result: 'Normal' },
            { testName: 'Blood Glucose Level', referenceRange: '70-100 mg/dL', result: '95 mg/dL' },
            { testName: 'Complete Blood Count (CBC)', referenceRange: 'Normal', result: 'Normal' },
            { testName: 'Blood Glucose Level', referenceRange: '70-100 mg/dL', result: '95 mg/dL' },
            { testName: 'Complete Blood Count (CBC)', referenceRange: 'Normal', result: 'Normal' },
            { testName: 'Blood Glucose Level', referenceRange: '70-100 mg/dL', result: '95 mg/dL' },
            { testName: 'Complete Blood Count (CBC)', referenceRange: 'Normal', result: 'Normal' },
            { testName: 'Blood Glucose Level', referenceRange: '70-100 mg/dL', result: '95 mg/dL' },
            { testName: 'Complete Blood Count (CBC)', referenceRange: 'Normal', result: 'Normal' },
            { testName: 'Blood Glucose Level', referenceRange: '70-100 mg/dL', result: '95 mg/dL' },
            { testName: 'Complete Blood Count (CBC)', referenceRange: 'Normal', result: 'Normal' },
            { testName: 'Blood Glucose Level', referenceRange: '70-100 mg/dL', result: '95 mg/dL' },
            { testName: 'Complete Blood Count (CBC)', referenceRange: 'Normal', result: 'Normal' },
            { testName: 'Blood Glucose Level', referenceRange: '70-100 mg/dL', result: '95 mg/dL' },
            { testName: 'Complete Blood Count (CBC)', referenceRange: 'Normal', result: 'Normal' },
            { testName: 'Blood Glucose Level', referenceRange: '70-100 mg/dL', result: '95 mg/dL' },
            { testName: 'Complete Blood Count (CBC)', referenceRange: 'Normal', result: 'Normal' },
            { testName: 'Blood Glucose Level', referenceRange: '70-100 mg/dL', result: '95 mg/dL' },
            { testName: 'Complete Blood Count (CBC)', referenceRange: 'Normal', result: 'Normal' },
            { testName: 'Blood Glucose Level', referenceRange: '70-100 mg/dL', result: '95 mg/dL' },
            { testName: 'Complete Blood Count (CBC)', referenceRange: 'Normal', result: 'Normal' },
            { testName: 'Blood Glucose Level', referenceRange: '70-100 mg/dL', result: '95 mg/dL' },
            { testName: 'Complete Blood Count (CBC)', referenceRange: 'Normal', result: 'Normal' },
            { testName: 'Blood Glucose Level', referenceRange: '70-100 mg/dL', result: '95 mg/dL' },
            // Add more test details as needed
        ];

        // Define the document definition object
        var docDefinition: any = {
            // Page size and margins
            pageSize: 'A4',
            pageMargins: [40, 120, 40, 80],

            // Content of the PDF
            content: [
                // Title

                // Test Details and Results
                {
                    text: 'Test Details and Results',
                    style: 'subheader',
                    margin: [0, 0, 0, 10],
                },
                {
                    table: {
                        widths: ['*', '*', '*'],
                        headerRows: 1,
                        body: [['Test Name', 'Reference Range', 'Result'], ...tests.map((test) => [test.testName, test.referenceRange, test.result])],
                    },
                    layout: 'lightHorizontalLines',
                    margin: [0, 0, 0, 15],
                },
                // Additional Comments or Notes
                {
                    text: 'Additional Comments or Notes',
                    style: 'subheader',
                    margin: [0, 0, 0, 10],
                },
                {
                    text: patientInfo.notes || 'No additional comments.',
                },
            ],
            // Page header and footer
            header: (currentPage: any, pageCount: any, pageSize: any) => {
                // Define multiple rows of data in the header
                let headerData = [
                    {
                        text: 'Pathlab Report',
                        style: 'header',
                        alignment: 'center',
                        fontSize: 18,
                        margin: [40, 10, 40, 0],
                    },
                    // Patient Information
                    {
                        text: 'Patient Information',
                        style: 'subheader',
                        margin: [40, 0, 40, 0],
                    },
                    {
                        text: 'Patient Name: ' + patientInfo.name,
                        margin: [40, 0, 40, 0],
                    },
                    {
                        text: 'Date of Birth: ' + patientInfo.dateOfBirth,
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

                    {
                        text: 'Page ' + currentPage.toString() + ' of ' + pageCount,
                        alignment: 'center',
                    },
                ];
            },

            // Styles
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                },
            },
        };

        // Generate the PDF

        // Example patient information and test details

        // Call the generatePathlabReport function with patient information and test details

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
