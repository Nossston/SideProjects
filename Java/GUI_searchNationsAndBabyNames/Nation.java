package NostonWS6;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

public class Nation {
    private static ArrayList<String> nations;
    private static ArrayList<String> capitals;

    public static void show(File file2){
        ArrayList<String> lines =new ArrayList<>() ;
        try {
            Scanner myReader = new Scanner(file2);
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
                lines.add(data);
            }
            myReader.close();
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
        String[] nation;
        ArrayList<String> nations= new ArrayList<>();
        ArrayList<String> capitals= new ArrayList<>();
        for (int i = 0; i < lines.size();i++){
            nation=lines.get(i).split("\\:");
            nations.add(i,nation[0]);
            capitals.add(i,nation[1].trim());
        }
        setNations(nations);
        setCapitals(capitals);
    }

    public static String getCapitalByNation(String _nation){
        for (int i =0; i < getNations().size();i++ ){
            if (getNations().get(i).contains( _nation))return getCapitals().get(i);
        }
        return "Cannot find the capital, please check the Nation is correctly typed";
    }
    public static String getNationByCapital(String _capital){
        for (int i =0; i < getCapitals().size();i++ ){
            if (getCapitals().get(i).contains( _capital)) return getNations().get(i);
        }
        return "Cannot find the nation, please check the Capital is correctly typed";
    }

    public static ArrayList<String> getNations() {
        return nations;
    }

    public static void setNations(ArrayList<String> nations) {
        Nation.nations = nations;
    }

    public static ArrayList<String> getCapitals() {
        return capitals;
    }

    public static void setCapitals(ArrayList<String> capitals) {
        Nation.capitals = capitals;
    }
}

