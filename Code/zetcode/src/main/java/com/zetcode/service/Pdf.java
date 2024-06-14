package com.zetcode.service;


import java.io.File;
import java.io.PrintWriter;
import java.io.Writer;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.fit.pdfdom.PDFDomTree;

/**
 * Hello world!
 *
 */
public class Pdf extends StorageService 
{
    public static void main( String[] args )
    {
    	generateHTMLFromPDF("path + fileName");
    	}
    private static void generateHTMLFromPDF(String filename) {
    	try {
	    PDDocument pdf = PDDocument.load(new File(filename));
	    Writer output = new PrintWriter("path + fileName+.html");
	    new PDFDomTree().writeText(pdf, output);
	    
	    output.close();    
    	}
    	 catch(Throwable e) {
         	e.printStackTrace();
}
}
}



