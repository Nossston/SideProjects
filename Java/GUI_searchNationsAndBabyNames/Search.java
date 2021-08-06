/**********************************************
 Workshop 6
 Course:<JAC444NCC> - 4th Semester
 Last Name: Liu
 First Name: Yu-Che
 ID:134379189
 Section:NCC
 This assignment represents my own work in accordance with Seneca Academic Policy. Signature
 Date:2020/11/10
 **********************************************/
package NostonWS6;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

public class Search {

    public String genderResult(String input){
        input = input.trim().toUpperCase();
        if ( (input.contentEquals("M")  || input.contentEquals("MALE") )){
            return "Boy";
        }
        else if((input.contentEquals("F")  || input.contentEquals("FEMALE") ) ){
            return "Girl";
        }
        return "Unknown Gender";
    }

    public int showRank(String year, String gender, String name  ){
        int rank=0;
        StringBuilder tempo= new StringBuilder();
        ArrayList<String> lines =new ArrayList<>() ;

        String fileName = "babynamesranking" + year +".txt";
        File file = new File(fileName);
        try {
            Scanner myReader = new Scanner(file);
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
                lines.add(data);
            }
            myReader.close();
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }

        for ( int i=0 ; i< lines.size();i++ ){
            if (lines.get(i).contains(name) ){
                rank = i;
                tempo.append("\n").append(lines.get(i));
            }
        }
        System.out.println(tempo);

        // \\s+ 0..* whitespaces
        String[] tokens = tempo.toString().split("\\s+");


//        if we enter Jacob and 2009
//        1 	Jacob	21,036 	Isabella 	22,222
//        444 	Jacoby	628 	Brenna 	705

        // Avery is Unisex name
//        32 	Nicholas	10,801 	Avery 	6,279
//        223 	Avery	1,624 	Jazmine 	1,450

        for (int i = 0 ; i< tokens.length; i++ ){
            if (tokens[i].equals(name)){
                gender = gender.trim().toUpperCase();
                if ( (gender.contentEquals("M")  || gender.contentEquals("MALE") )
                        // Male is always at index 2,7,12...
                        && i%5 == 2 ){
                    rank = Integer.parseInt( tokens[i-1]);
                }
                else if((gender.contentEquals("F")  || gender.contentEquals("FEMALE") )
                        && i%5 == 4){
                    rank = Integer.parseInt( tokens[i-3] );
                }
            }
        }
        System.out.println("ranks: "+rank);
        return rank;
    }

}
