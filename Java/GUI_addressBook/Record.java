/**********************************************
 Workshop 5
 Course:<JAC444NCC> - 4th Semester
 Last Name: Liu
 First Name: Yu-Che
 ID:134379189
 Section:NCC
 This assignment represents my own work in accordance with Seneca Academic Policy. Signature
 Date:2020/10/31
 **********************************************/
package NostonWS5;

import java.io.File;
import java.io.IOException;
import java.io.RandomAccessFile;

public class Record {
    final int MAXCHARS = 10;
    private String fName_ ;
    String lName_ ;
    String city_ ;
    String province_ ;
    String poscode_ ;
    char delimiter = '_';
    char space = ' ';

    public void sortRecord(String input){
        int charsPerLine = MAXCHARS ;
        fName_= input.substring(0,charsPerLine).replace(delimiter,space).trim();
        lName_= input.substring(charsPerLine,charsPerLine*2).replace(delimiter,space).trim();
        city_= input.substring(charsPerLine*2,charsPerLine*3).replace(delimiter,space).trim();
        province_= input.substring(charsPerLine*3,charsPerLine*4).replace(delimiter,space).trim();
        poscode_= input.substring(charsPerLine*4,charsPerLine*5).replace(delimiter,space).trim();
    }
    public String stringToFixedLength(String input){
        String fixed = input;
        if (fixed.length() > MAXCHARS)
            return fixed.substring(0,MAXCHARS);
        for (  int i = fixed.length(); i<MAXCHARS; i++ ){
            fixed += delimiter;
        }
        return fixed;
    }
    public void writeRecord(File filename,long lineStart, String fName,String lName,String city,String province,String poscode ) throws IOException {
        RandomAccessFile randomAccessFile = new RandomAccessFile(filename,"rw");
        randomAccessFile.seek(lineStart);
        randomAccessFile.writeBytes("\n"+fName+"\n"+lName+"\n"+city+"\n"+province+"\n"+poscode);
    }
    public void updateRecord(File filename,long lineStart, String fName,String lName,String city,String province,String poscode ) throws IOException {
        RandomAccessFile randomAccessFile = new RandomAccessFile(filename,"rw");
        randomAccessFile.seek(lineStart);
        randomAccessFile.writeBytes(fName+"\n"+lName+"\n"+city+"\n"+province+"\n"+poscode);
    }

    public String getCity_() { return city_; }
    public String getfName_() { return fName_; }
    public String getlName_() { return lName_; }
    public String getPoscode_() { return poscode_; }
    public String getProvince_() { return province_; }
}
