import { Component } from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

// (<any>pdfMake).fonts = {
//     ...pdfFonts.pdfMake.vfs,
//     Tahoma: {
//         normal: 'assets/fonts/Tahoma-Regular-font.ttf', // Path to Tahoma font file
//         bold: 'assets/fonts/Tahoma-Bold.ttf',
//         bolditalics: 'assets/fonts/Tahoma-Bold-Italic.ttf',
//     },
// };

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
            resultDescription: `<p align="center"><b><u>CT &ndash; BRAIN (CECT)</u></b></p>

            <p><b><u>STUDY PROTOCOL:</u></b></p>
            
            <p>Axial 5 mm cuts were obtained from the base of the skull to the vertex.</p>
            
            <p><b><u>HISTORY</u></b>:&nbsp;Seizure</p>
            
            <p><b><u>FINDINGS:</u></b></p>
            
            <ul>
                <li><b>There is no intra cranial bleed.</b></li>
                <li><b>There is a ring enhancing lesion measuring 7 x 6 mm (AP x TR) and showing eccentric hyperdensity&nbsp;in the right parietal lobe and mild surrounding edema.<br />
                <br />
                Features are suggestive of neurocysticercosis.</b><br />
                &nbsp;</li>
                <li><b>There is mild bilateral maxillary sinusitis.</b></li>
            </ul>
            
            <p>The rest of the cerebral hemispheres, brainstem and cerebellum demonstrate normal attenuation.</p>
            
            <p>The basal ganglia, internal capsule, corpus callosum and thalamus appear normal.</p>
            
            <p>The cerebral ventricles are normal.</p>
            
            <p>The cisternal spaces appear normal.</p>
            
            <p>The interhemispheric fissure is centered on the midline.</p>
            
            <p>Sella and pituitary are normal. Parasellar structures are unremarkable.</p>
            
            <p>There are no abnormalities in the cerebellopontine angle areas on both sides.</p>
            
            <p>The orbital contents are unremarkable.</p>
            
            <p>There are no abnormalities in the calvarium.</p>
            
            <p>Cranio-cervical junction is intact.</p>
            
            <p><b><u>IMPRESSION:</u></b></p>
            
            <ul>
                <li><em><b>There is a ring enhancing lesion measuring 7 x 6 mm (AP x TR) and showing eccentric hyperdensity&nbsp;in the right parietal lobe and mild surrounding edema.<br />
                <br />
                Features are suggestive of neurocysticercosis.</b></em></li>
                <li><em><b>There is mild bilateral maxillary sinusitis.</b></em><br />
                Suggested clinical correlation</li>
            </ul>
            <p>Cranio-cervical junction is intact.</p>
                `,
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
        // let description = JSON.stringify(reportInfoOfXray.resultDescription);
        // Define the document definition object

        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(reportInfoOfXray.resultDescription, 'text/html');

        // Extract and process the content as needed
        const content2 = Array.from(htmlDoc.body.childNodes).map((node: any) => {
            if (node.nodeType === Node.TEXT_NODE) {
                return { text: node.textContent, margin: [0, 0, 0, 10] };
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                if (node.nodeName === 'UL') {
                    const listItems = Array.from(node.querySelectorAll('li')).map((li: any) => li.textContent);
                    return { ul: listItems, margin: [0, 0, 0, 10] };
                } else return null;
                // You can add more conditions for other HTML elements as needed
            } else return null;
        });
        console.log(content2);
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

                // {
                //     text: htmlToPdfmake(reportInfoOfXray.resultDescription, { ignoreStyles: ['font-family'] }),
                //     // style: 'tahomaStyle',
                //     margin: [],
                // },
                {
                    // columns: [this.convertCkeditorToPdfmake(reportInfoOfXray.resultDescription)],
                    columns: [reportInfoOfXray.resultDescription],
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
                // tahomaStyle: {
                //     font: 'Tahoma', // Use the Tahoma font family
                // },
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

    // // Ckeditor content
    // private convertCkeditorToPdfmake(ckeditorContent: string): any[] {
    //     // Use htmlToPdfmake to convert CKEditor content to pdfmake content
    //     const pdfmakeContent: any = htmlToPdfmake(ckeditorContent);

    //     // Process pdfmakeContent to handle lists
    //     return this.handleLists(pdfmakeContent);
    // }

    // private handleLists(content: any[]): any[] {
    //     // Function to handle list items
    //     const processListItems = (items: any[], ordered: boolean) => {
    //         const listContent: any[] = [];
    //         items.forEach((item) => {
    //             const listItem: any = { text: item.text || '' };
    //             if (item.ul) {
    //                 // Unordered list (bulleted)
    //                 listItem.ul = item.ul;
    //             } else if (item.ol) {
    //                 // Ordered list (numbered)
    //                 listItem.ol = item.ol;
    //             }
    //             listContent.push(listItem);
    //         });
    //         return { [ordered ? 'ol' : 'ul']: listContent };
    //     };

    //     const updatedContent: any[] = [];
    //     let currentList: any[] = [];
    //     let isOrdered = false;

    //     content.forEach((item) => {
    //         if (item.ul || item.ol) {
    //             // List item
    //             if (item.ul) isOrdered = false;
    //             if (item.ol) isOrdered = true;
    //             currentList.push(item);
    //         } else {
    //             // Non-list item
    //             if (currentList.length > 0) {
    //                 updatedContent.push(processListItems(currentList, isOrdered));
    //                 currentList = [];
    //             }
    //             updatedContent.push(item);
    //         }
    //     });

    //     // If there are remaining list items, process them
    //     if (currentList.length > 0) {
    //         updatedContent.push(processListItems(currentList, isOrdered));
    //     }

    //     return updatedContent;
    // }
}
