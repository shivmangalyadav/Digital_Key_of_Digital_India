package com.zetcode.service;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class HTMLmanipulate {
	public static void main(String[] args) throws IOException {
		
		File f=new File("D:\\PDF To Html\\Hyperlinking Final Test\\Rushi.html");//place where html is there
		
		FileWriter fw = new FileWriter(f, true);
		BufferedWriter bw=new BufferedWriter(fw);
		String s="<script src='pdf3.js'></script>";
		bw.write(s);//will include .js file in html
		bw.close();
		
	}

}