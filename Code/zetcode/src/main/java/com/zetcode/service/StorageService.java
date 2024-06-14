package com.zetcode.service;

import com.zetcode.exception.StorageException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

//pdftoHtml dependencies
import java.io.File;
import java.io.PrintWriter;
import java.io.Writer;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.fit.pdfdom.PDFDomTree;

//HTMLmanupulation
import java.io.BufferedWriter;

import java.io.FileWriter;


@Service
public class StorageService {

    @Value("${upload.path}")
    private String path;		//below path need to be changed as per user folder structure
  private String opath="C:\\Users\\satya\\OneDrive\\Desktop\\CDAC\\Project\\Final\\New\\zetcode\\htmlFiles\\";
    public void uploadFile(MultipartFile file) {
    	System.out.println("uploading");
    	
        if (file.isEmpty()) {

            throw new StorageException("Failed to store empty file");
        }

        try {
            var fileName = file.getOriginalFilename();
            var is = file.getInputStream();
            
            
            Files.copy(is, Paths.get(path + fileName),
                    StandardCopyOption.REPLACE_EXISTING);
            System.out.println("File Uploaded");
            
            //mycode
            generateHTMLFromPDF(path + fileName,"pdf1");
             System.out.println("File Converted");
             System.out.println(opath);
             //HTMLmanupulation
            String pat=opath + "pdf1"+".html";
            htmlManupulation(pat);
            System.out.println("Script tag added");
        } catch (IOException e) {

            var msg = String.format("Failed to store file %f", file.getName());

            throw new StorageException(msg, e);
        }
        
      
    }
    
    public void upload2File(MultipartFile file) {
    	System.out.println("uploading");

        if (file.isEmpty()) {

            throw new StorageException("Failed to store empty file");
        }

        try {
            var fileName = file.getOriginalFilename();
            var is = file.getInputStream();

            Files.copy(is, Paths.get(path + fileName),
                    StandardCopyOption.REPLACE_EXISTING);
            System.out.println("File Uploaded");
            
            //mycode
            generateHTMLFromPDF(path + fileName,"pdf2");
             System.out.println("File Converted");
            
             //HTMLmanupulation
            String pat=opath + "pdf2"+".html";
            htmlManupulation2(pat);
            System.out.println("Script tag added");
        } catch (IOException e) {

            var msg = String.format("Failed to store file %f", file.getName());

            throw new StorageException(msg, e);
        }
        
      
    }
    
    public void upload3File(MultipartFile file) {
    	System.out.println("uploading");

        if (file.isEmpty()) {

            throw new StorageException("Failed to store empty file");
        }

        try {
            var fileName = file.getOriginalFilename();
            var is = file.getInputStream();

            Files.copy(is, Paths.get(path + fileName),
                    StandardCopyOption.REPLACE_EXISTING);
            System.out.println("File Uploaded");
            
            //mycode
            generateHTMLFromPDF(path + fileName,"pdf3");
             System.out.println("File Converted");
            
             //HTMLmanupulation
            String pat=opath + "pdf3"+".html";
            htmlManupulation3(pat);
            System.out.println("Script tag added");
            
            //display
           
        } catch (IOException e) {

            var msg = String.format("Failed to store file %f", file.getName());

            throw new StorageException(msg, e);
        }
        
      
    }
    
    private  void generateHTMLFromPDF(String filename,String fname) {
    	try {
	    PDDocument pdf = PDDocument.load(new File(filename));
	    Writer output = new PrintWriter(opath + fname+".html");
	    new PDFDomTree().writeText(pdf, output);
	    
	    output.close();    
    	}
    	 catch(Throwable e) {
         	e.printStackTrace();
}
}
public void htmlManupulation(String pat) throws IOException {
		
		File f=new File(pat);//place where html is there
		
		FileWriter fw = new FileWriter(f, true);
		BufferedWriter bw=new BufferedWriter(fw);
		String s="<script src='pdf1.js'></script>";
		bw.write(s);//will include .js file in html
		bw.close();
		
	}
public void htmlManupulation2(String pat) throws IOException {
	
	File f=new File(pat);//place where html is there
	
	FileWriter fw = new FileWriter(f, true);
	BufferedWriter bw=new BufferedWriter(fw);
	String s="<script src='pdf2.js'></script>";
	bw.write(s);//will include .js file in html
	bw.close();
	
}
public void htmlManupulation3(String pat) throws IOException {
	
	File f=new File(pat);//place where html is there
	
	FileWriter fw = new FileWriter(f, true);
	BufferedWriter bw=new BufferedWriter(fw);
	String s="<script src='pdf3.js'></script>";
	bw.write(s);//will include .js file in html
	bw.close();
	
}



}