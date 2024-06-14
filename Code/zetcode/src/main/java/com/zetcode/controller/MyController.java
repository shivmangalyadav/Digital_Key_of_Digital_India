package com.zetcode.controller;
import com.zetcode.exception.StorageException;
import com.zetcode.service.StorageService;

import java.io.File;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
//import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class MyController {

    @Autowired
    private StorageService storageService;

    @RequestMapping(value = "/doUpload", method = RequestMethod.POST,
            consumes = {"multipart/form-data"})
    public String upload(@RequestParam MultipartFile file) {

        storageService.uploadFile(file);

        return "second.html";
    }

    @ExceptionHandler(StorageException.class)
    public String handleStorageFileNotFound(StorageException e) {

        return "redirect:/failure.html";
    }
    

    
    //2nd file uploading
    @RequestMapping(value = "/dodoUpload",
    		method = RequestMethod.POST,
            consumes = {"multipart/form-data"})
    public String secondupload(@RequestParam MultipartFile file) {
System.out.println("this is second");
        storageService.upload2File(file);

        return "third.html";
    }
    
    //3nd file uploading
    @RequestMapping(value="/success",
    		method = RequestMethod.POST,
            consumes = {"multipart/form-data"})
    public String thirdupload(@RequestParam MultipartFile file) {
System.out.println("this is second");
        storageService.upload3File(file);

        return "redirect:/file";
    }
    

    @RequestMapping(value = "/file", method = RequestMethod.GET)
	public String showFile() {
		// Creating a File object for directory //Need to change as per your file location
		File directoryPath = new File("C:\\Users\\satya\\OneDrive\\Desktop\\CDAC\\Project\\Final\\New\\zetcode\\htmlFiles");
		// List of all files and directories
		String[] temp = {"pdf1.html","pdf2.html","pdf3.html"};
		for (int i = 0; i < 3; i++) {
			String contents = (String) ("C:\\Users\\satya\\OneDrive\\Desktop\\CDAC\\Project\\Final\\New\\zetcode\\htmlFiles\\" + temp[i].toString());

			try {
				Runtime rTime = Runtime.getRuntime();
				String url = contents;
				String browser = "C:\\Program Files\\Google\\Chrome\\Application/chrome.exe ";
				Process pc = rTime.exec(browser + url);
				pc.waitFor();

			} catch (Exception e) {
				System.out.println(e);
			}
		}
		return "success.html";
	}
}