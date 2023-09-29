import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { UserService } from '../Service/user.service';
import jspdf, { jsPDF } from 'jspdf';
import html2pdf from 'html2pdf.js';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { FileService } from '../Service/file.service';
import html2canvas from 'html2canvas';
import 'jspdf-autotable';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class EditorComponent implements OnInit {
  pdfContent!: any;
  filename!: string;
  pdfData:any;
  constructor(private service: UserService, private http:HttpClient,private fileservice:FileService) { }
  @ViewChild('editor', { static: false }) editorRef?: ElementRef;
  @ViewChild('editor') editor!: ElementRef;
  ngAfterViewInit() {
    // The ViewChild is now initialized, you can access editorRef here if needed.
  }

  name = 'Angular 6';
  htmlContent = '';

  ngOnInit(): void {

  }
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  // const pdf = require('html-pdf'); // Import the 'html-pdf' library

  // SendFax() {
  //   const pdf = require('html-pdf'); 
  //   const pdfOptions = {
  //     format: 'Letter', // You can specify the page format here
  //     border: '10mm', // You can set the page margins here
  //   };

  //   // Generate PDF from HTML content
  //   pdf.create(this.htmlContent, pdfOptions).toBuffer((err: any, buffer: Blob) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }

  //     // Now, send the generated PDF to the .NET Web API
  //     const formData = new FormData();
  //     formData.append('pdfFile', buffer, 'generated.pdf'); // Assuming your API expects a file with the name 'pdfFile'

  //     fetch('YOUR_API_ENDPOINT', {
  //       method: 'POST',
  //       body: formData,
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         console.log('PDF sent successfully.');
  //       })
  //       .catch((error) => {
  //         console.error('Error sending PDF:', error);
  //       });
  //   });
  // }



  SendFax() {
    
    this.generateAndDownloadPDF();
    // //this.downloadAndSavePDF();
    // console.log(this.htmlContent);
    let payload:payload = {
      description: (this.htmlContent).toString()
    };
   
    //this.generatePDF(payload); 
    
   // this.captureEditorContent();
   // this.generatePDF();
    this.service.sendFax(this.pdfContent).subscribe((res: any) => {
      console.log(res);
      //console.log("hello Raju Kumar");
    })
  }
  // generateAndDownloadPDF() {
  //   debugger
  //   const editor = document.getElementById('editor'); // Replace with the ID of the element containing your HTML content
  //   if (editor) {
  //     const textContent = editor.innerText; // Get the text content of the element
  //     const options = {
  //       margin: 30,
  //       filename: 'your-salary-slip.pdf',
  //       image: { type: 'jpeg', quality: 0.98 },
  //       html2canvas: { scale: 2 },
  //       jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  //     };

  //     // Create a new HTML element with the extracted text content
  //     const textElement = document.createElement('div');
  //     textElement.innerText = textContent;

  //     // Generate and save the PDF

  //    let data = html2pdf().from(textElement).set(options).save();

  //    this.pdfContent = data;
  //   } else {
  //     console.error("Element with ID 'editor' not found.");
  //   }
  // }


  // generateAndDownloadPDF() {
  //   debugger
  //   const editor = document.getElementById('editor'); // Replace with the ID of the element containing your HTML content
  //   if (editor) {
  //     const textContent = editor.innerText; // Get the text content of the element
  //     const options = {
  //       margin: 30,
  //       filename: 'your-salary-slip.pdf',
  //       image: { type: 'jpeg', quality: 0.98 },
  //      html2canvas: { scale: 2 },
  //       jspdf: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  //     };
  
  //     // Create a new HTML element with the extracted text content
  //     const textElement = document.createElement('div');
  //     textElement.innerText = textContent;
  
  //     // Generate the PDF but don't save it immediately
  //     const pdf = html2pdf().from(textElement).set(options).toPdf();
  //     this.pdfContent = pdf;
  //     console.log(pdf);
  //   } else {
  //     console.error("Element with ID 'editor' not found.");
  //   }
  // }

  // generateAndDownloadPDF() {
  //   const doc = new jsPDF();
  //   const editor = document.getElementById('editor'); // Replace with the ID of your HTML content container
  
  //   if (editor) {
  //     const textContent = editor.innerText;
  //     textContent.split('Standard')
  //     doc.text(textContent, 10, 10); // You can adjust the position where text is added
  //     const pdfData = doc.output('blob'); // Generate PDF as a Blob
  
  //     // Now, you can store the PDF data in a variable or do further processing
  //     // For example, you can save it to a variable named 'generatedPDF' for later use.
  //     const generatedPDF = pdfData;
  //     this.pdfContent = generatedPDF
  //     console.log(generatedPDF);
      
  
  //     // If you want to download the PDF, you can create a download link
  //     // const url = window.URL.createObjectURL(pdfData);
  //     // const a = document.createElement('a');
  //     // a.href = url;
  //     // a.download = 'your-salary-slip.pdf';
  //     // a.click();
  //     // window.URL.revokeObjectURL(url);
  //   }
  // }

  generateAndDownloadPDF() {
    const doc = new jsPDF();
    const editor = document.getElementById('editor'); // Replace with the ID of your HTML content container
  
    if (editor) {
      let textContent = editor.innerText;
  
      // Split and remove "Standard"
      textContent = textContent.split('Standard').join('');
  
      // Split and remove "Arial"
      textContent = textContent.split('Arial').join('');
  
      // Split and remove "Clear Class"
      textContent = textContent.split('Clear Class').join('');
  
      // Remove spaces, the character "2", and double quotes using replace with regular expressions
      textContent = textContent.replace(/ /g, '').replace(/2/g, '').replace(/\u0022/g, ''); // \u0022 represents the Unicode for double quote
  
      doc.text(textContent, 10, 10); // Adjust the position where text is added
      const pdfData = doc.output('blob'); // Generate PDF as a Blob
  
      // Now, you can store the PDF data in a variable or do further processing
      // For example, you can save it to a variable named 'generatedPDF' for later use.
      const generatedPDF = pdfData;
      this.pdfContent = generatedPDF;
      console.log(generatedPDF);
  
      // If you want to download the PDF, you can create a download link
      // const url = window.URL.createObjectURL(pdfData);
      // const a = document.createElement('a');
      // a.href = url;
      // a.download = 'your-salary-slip.pdf';
      // a.click();
      // window.URL.revokeObjectURL(url);
    }
  }
  
  
  
  
  
  onFileSelected(event: any) {
    debugger
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      this.service.sendFax(selectedFile).subscribe((res: any) => {
        console.log(res);
        console.log("hello Raju Kumar");
      })
      // Do something with the selected file, e.g., upload it to a server
      console.log('Selected file:', selectedFile);
    }
  }

  // downloadAndSavePDF(): void {
  //   this.fileservice.downloadAndSavePDF();
  // }
 
  // captureEditorContent() {
  //   const editor = document.getElementById('editor'); // Replace 'editor' with your editor's ID
  //   if (editor) {
  //     html2canvas(editor).then((canvas:any) => {
  //       // Convert the captured content to an image data URL
  //       const imgData = canvas.toDataURL('image/png');
  
  //       // Store the image data URL in pdfData
  //       this.pdfData = imgData;
  //     });
  //   }
  // }
  // generatePDF(payload:any) {
  //   debugger
  //   const doc = new jspdf();
  
  //   // Add an image of the captured content to the PDF
  //   doc.text(payload.description,10,10)
  
  //   // Save the PDF data to the pdfData variable
  //   //this.pdfData = doc.output('datauristring'); // Save as data URI
  //   this.pdfData = doc.save('filename.pdf');
  
  //   // You can also save the PDF to a file using doc.save('filename.pdf');
  // }
  
  

}
export interface payload
{
    description:string;
}



