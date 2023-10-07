import { Component } from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

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

        let reportInfoOfXray = {
            auditAction: 'C',
            createdBy: null,
            createdByUser: null,
            effectiveDateFrom: '2023-10-06',
            effectiveDateTo: null,
            createdIP: null,
            entityEmailID: null,
            companyID: null,
            activeFlag: null,
            companyName: null,
            mode: null,
            dropDown: null,
            entityID: 2,
            entityBusinessID: 2,
            entityBusinessName: null,
            entityBusinessShortCode: null,
            entityParentBusinessID: 15,
            entityParentBusinessName: null,
            detailFlag: null,
            active: null,
            subDepartmentID: 29,
            subDepartmentName: 'X-Ray',
            departmentID: 2,
            departmentName: null,
            serviceID: 503,
            testID: null,
            testName: 'X-ray Pelvis with both Hip AP View',
            testComponentID: null,
            testComponentName: null,
            patitentID: 387,
            patitentName: 'Mrs MAHIMA DEVI,1988-10-06,F',
            reportStatus: null,
            resultDescription:
                '<p style="margin-left:144px"><span style="font-size:12pt"><span ><strong><em><span style="font-size:11.0pt"><span style="">X RAY PELVIS &nbsp;AP</span></span></em></strong></span></span><span style="font-size:12pt"><span ><strong><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </em></strong></span></span></p>\n\n<p style="text-align:justify"><span style="font-size:12pt"><span ><em><span style="">Visualised bones are unremarkable .</span></em></span></span></p>\n\n<p style="text-align:justify"><span style="font-size:12pt"><span ><em><span style="">Bilateral hip joints are normal .</span></em></span></span></p>\n\n<p style="text-align:justify"><span style="font-size:12pt"><span ><em><span style="">Bilateral SI joint are normal.</span></em></span></span></p>\n\n<p style="text-align:justify"><span style="font-size:12pt"><span ><strong><em><span style="">IMPRESSION :&nbsp;&nbsp; </span></em></strong></span></span><span style="font-size:12pt"><span ><em><span style="font-size:14.0pt"><span style="">Unremarkable&nbsp; scan</span></span></em><em><span style="font-size:18.0pt"><span style="">. </span></span></em></span></span></p>\n',
            isPrinted: null,
            remarks: null,
            attachmentImageFirst: '',
            attachmentImageSecond: '',
            printedTime: null,
            isReported: 1,
            reportedBy: 1,
            reportedByName: '  SA',
            reportedTime: '06-10-2023 11:55:00',
            referralFrom: 10,
            isVerified: 1,
            verifiedBy: 1,
            verifiedByName: '  SA',
            verifiedTime: '06-10-2023 11:55:00',
            isNewTemplate: null,
            testTemplateID: 118,
            templateName: null,
            appointmentReportEntityList: null,
        };

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

            // Add more test details as needed
        ];

        // Define the document definition object
        var docDefinition: any = {
            // Page size and margins
            pageSize: 'A4',
            pageMargins: [40, 200, 40, 80],

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
                    style: 'general',
                    layout: 'lightHorizontalLines',
                    margin: [0, 0, 0, 15],
                },
                // Additional Comments or Notes
                {
                    text: htmlToPdfmake(reportInfoOfXray.resultDescription),
                    style: '',
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
                        table: {
                            widths: ['*', '*'],

                            body: [
                                [
                                    { text: 'Client', style: { bold: true }, border: [false, false, false, false] },
                                    { text: 'Processed By', style: { bold: true }, border: [false, false, false, false] },
                                ],
                                [
                                    { text: 'Nirman Nagar CC (Nirman Nagar)', style: { bold: true }, border: [false, false, false, false] },
                                    { text: 'Pathkind Diagnostics Pvt. Ltd.', style: { bold: true }, border: [false, false, false, false] },
                                ],
                                [
                                    { text: 'M B-98,Doctors Plaza, Everest Vihar', style: '', border: [false, false, false, false] },
                                    { text: 'Plot No. A-235, 1st Floor, Guru Jambeshwar Nagar-A ', style: '', border: [false, false, false, false] },
                                ],
                                [
                                    { text: '', style: { fontSize: 18, bold: true }, border: [false, false, false, true] },
                                    { text: '', style: { fontSize: 18, bold: true }, border: [false, false, false, true] },
                                ],
                                [
                                    {
                                        table: {
                                            widths: [50, '*'],
                                            body: [
                                                [
                                                    { text: 'Name', style: 'bold', border: [false, false, false, false] },
                                                    { text: ': ' + 'Mr. VIKASH KUMAR CHAUDHARY', style: 'bold', border: [false, false, false, false] },
                                                ],
                                                [
                                                    { text: 'Sex', style: '', border: [false, false, false, false] },
                                                    { text: ': ' + 'Male', style: '', border: [false, false, false, false] },
                                                ],
                                                [
                                                    { text: 'Age', style: '', border: [false, false, false, false] },
                                                    { text: ': ' + '25 Yrs', style: '', border: [false, false, false, false] },
                                                ],
                                                [
                                                    { text: 'P. ID No', style: '', border: [false, false, false, false] },
                                                    { text: ': ' + 'P26001738', style: '', border: [false, false, false, false] },
                                                ],
                                                [
                                                    { text: 'Referring Doctor ', style: '', border: [false, false, false, false] },
                                                    { text: ': ' + 'PANKAJ VERMA', style: '', border: [false, false, false, false] },
                                                ],
                                            ],
                                        },
                                        border: [false, false, false, false],
                                        margin: [-5, 0, 0, 0],
                                    },
                                    {
                                        table: {
                                            widths: [100, '*'],
                                            body: [
                                                [
                                                    { text: 'Billing Date', style: '', border: [false, false, false, false] },
                                                    { text: ': ' + '20/05/202119:38:44', style: '', border: [false, false, false, false] },
                                                ],
                                                [
                                                    { text: 'Sample Collected on', style: '', border: [false, false, false, false] },
                                                    { text: ': ' + '20/05/202119:38:44', style: '', border: [false, false, false, false] },
                                                ],
                                                [
                                                    { text: 'Sample Received on', style: '', border: [false, false, false, false] },
                                                    { text: ': ' + '20/05/202119:38:44', style: '', border: [false, false, false, false] },
                                                ],
                                                [
                                                    { text: 'Report Released on', style: '', border: [false, false, false, false] },
                                                    { text: ': ' + '20/05/202119:38:44', style: '', border: [false, false, false, false] },
                                                ],
                                                [
                                                    { text: 'Barcode No.', style: '', border: [false, false, false, false] },
                                                    { text: ': ' + '10703562', style: '', border: [false, false, false, false] },
                                                ],
                                            ],
                                        },
                                        border: [false, false, false, false],
                                        margin: [0, 0, 0, -5],
                                    },
                                ],
                                [
                                    { text: '', style: { fontSize: 18, bold: true }, border: [false, false, false, true] },
                                    { text: '', style: { fontSize: 18, bold: true }, border: [false, false, false, true] },
                                ],
                            ],
                        },
                        margin: [40, 0, 40, 0],
                        layout: '',
                        style: ['general'],
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
                general: {
                    fontSize: 10,
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
