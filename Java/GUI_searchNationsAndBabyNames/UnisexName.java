package NostonWS6;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;

public class UnisexName {

    static ArrayList<String> result = new ArrayList<>();
    static int show(String year){
        result.clear();
        String fileName = "babynamesranking" + year +".txt";
        ArrayList<String> lines =new ArrayList<>() ;
        String name  ="",tempo="";
        Set<String> set = new LinkedHashSet<>();
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
        set.add((lines.get(1)));
        set.add((lines.get(0)));
        for (String line : lines) {
            if (line.contains(name )) {
                tempo += "\n" + line;
            }
        }

        String[] tokens = tempo.split("\\s+");

        List<String> setM = new ArrayList<>();
        List<String> setF = new ArrayList<>();

        for ( int i =0; i<tokens.length; i++){
            if (i % 5 == 2)setM.add(tokens[i]);
            if (i % 5 == 4)setF.add(tokens[i]);
        }
        for (var s : setM) {
            for (var s2 : setF)
                if (s.equals(s2))
                    result.add(s);
        }
        Collections.sort(result);
        return result.size();
    }
}
