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

import javafx.application.Application;
import javafx.collections.FXCollections;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.HPos;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.ComboBox;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.*;
import javafx.stage.Stage;
import java.io.*;
import java.util.ArrayList;


public class Main extends Application {

    static String filename = "sample.txt";
    static final int MAXCHARS = 10;
    static final int LINESPERRECORD = 5;
    static int lineStart = 0;
    static int lineEnd = lineStart+LINESPERRECORD;
    static long lastRecordStarts = 0;
    static int lastRecordLine = 0;
    static TextField fName = new TextField("FirstName");
    static TextField lName = new TextField("LastName");
    static TextField city = new TextField("City");
    //https://docs.oracle.com/javafx/2/ui_controls/combo-box.htm
    static ComboBox<String> option = new ComboBox<>(FXCollections.observableArrayList(
            "AB", "BC", "MB", "NB", "NL", "NT", "NS", "NU", "ON", "PE", "QC", "SK", "YT"
    ));
    static TextField poscode = new TextField("Postalcode");

    @Override
    public void start(Stage primaryStage) {
        showGridPane(primaryStage);
    }

    public static void main(String[] args) {
        launch(args);
    }

    public static void showGridPane(Stage primaryStage){    // Create a pane and set its properties
        GridPane pane = new GridPane();
        pane.setAlignment(Pos.CENTER);
                                    // top , right, bottom, left
        pane.setPadding(new Insets(25, 12, 25, 12));
        pane.setHgap(5);
        pane.setVgap(13.5);

        pane.add(new Label("First Name: "), 0, 0);
        pane.add(fName, 1, 0,5,1);
        pane.add(new Label("Last Name: "), 0, 1);
        pane.add(lName, 1, 1,5,1);
        pane.add(new Label("City: "),0,3);
        pane.add(city,1,3 );
        Label province = new Label("Province: ");
        GridPane.setHalignment(province,HPos.CENTER);

        pane.add(province,2,3);
//        ComboBox option = new ComboBox(options);
        option.setMinWidth(180);
        option.setPromptText("Select a province");
        pane.add(option,3,3 );
        option.setValue("AB");
        pane.add(new Label("Postal Code: "),4,3);
        pane.add(poscode,5,3 );

        Button[] bt = new Button[6];
        bt[0] = new Button ("Add");
        bt[1] = new Button("First");
        bt[2]= new Button("Next");
        bt[3] = new Button("Previous");
        bt[4] = new Button("Last");
        bt[5] = new Button("Update");
        for ( int i = 0 ; i < 6 ; i++){
            pane.add(bt[i],i,4);
            GridPane.setHalignment(bt[i],HPos.CENTER);
            bt[i].setPadding(new Insets(15,25,15,25));
            bt[i].setMinWidth(175);
        }

        AddHandler addHandler = new AddHandler();
        bt[0].setOnAction(addHandler);
        FirstHandler firstHandler = new FirstHandler();
        bt[1].setOnAction(firstHandler);
        NextHandler nextHandler = new NextHandler();
        bt[2].setOnAction(nextHandler);
        PreviousHandler previousHandler = new PreviousHandler();
        bt[3].setOnAction(previousHandler);
        LastHandler lastHandler = new LastHandler();
        bt[4].setOnAction(lastHandler);
        UpdateHandler updateHandler = new UpdateHandler();
        bt[5].setOnAction(updateHandler);

        primaryStage.setTitle("WS5");
        Scene scene = new Scene(pane);
        primaryStage.setScene(scene); // Place the scene in the stage
        primaryStage.show();
    }

    static class FirstHandler implements EventHandler<ActionEvent> {

        @Override
        public void handle(ActionEvent actionEvent) {
            lineStart = 0;
            lineEnd = lineStart+LINESPERRECORD;
            String res = readRandomAccessFile(filename,lineStart,lineEnd,MAXCHARS);
            Record record = new Record();
            record.sortRecord(res);
            fName = new TextField(record.getfName_());
            lName = new TextField(record.getlName_());
            poscode=new TextField(record.getPoscode_());
            city = new TextField(record.getCity_() );
            option.setValue(record.getProvince_());
            Stage ss = new Stage();
            showGridPane(ss);
        }
    }
    static class NextHandler implements EventHandler<ActionEvent> {

        @Override
        public void handle(ActionEvent actionEvent) {
            File file = new File(filename);
            lastRecordStarts = file.length()-( (MAXCHARS+1)*LINESPERRECORD)+1;
            lastRecordLine = (int) lastRecordStarts%(MAXCHARS*LINESPERRECORD);
            if (lineStart >= lastRecordLine){
                lineStart = lastRecordLine;
                System.out.println("You've reached the end of the file");
            }else{
                lineStart+=LINESPERRECORD;
            }
            lineEnd = lineStart+LINESPERRECORD;
            String res= readRandomAccessFile(filename,lineStart,lineEnd,MAXCHARS);
            Record record = new Record();
            record.sortRecord(res);
            fName = new TextField(record.getfName_());
            lName = new TextField(record.getlName_());
            poscode=new TextField(record.getPoscode_());
            city = new TextField(record.getCity_() );
            option.setValue(record.getProvince_());
            Stage ss = new Stage();
            showGridPane(ss);
        }
    }
    static class PreviousHandler implements EventHandler<ActionEvent> {

        @Override
        public void handle(ActionEvent actionEvent) {
            lineStart -=LINESPERRECORD;
            if (lineStart < 0 ){
                lineStart = 0;
                System.out.println("this is the start of the file");
            }
            lineEnd = lineStart+LINESPERRECORD;

            String res= readRandomAccessFile(filename,lineStart,lineEnd,MAXCHARS);
            Record record = new Record();
            record.sortRecord(res);
            fName = new TextField(record.getfName_());
            lName = new TextField(record.getlName_());
            poscode=new TextField(record.getPoscode_());
            city = new TextField(record.getCity_() );
            option.setValue(record.getProvince_());
            Stage ss = new Stage();
            showGridPane(ss);
        }
    }
    static class LastHandler implements EventHandler<ActionEvent> {

        @Override
        public void handle(ActionEvent actionEvent) {
            //https://www.netjstech.com/2016/02/how-to-read-file-from-last-line-in-java.html
            File file = new File(filename);
            lastRecordStarts = file.length()-( (MAXCHARS+1)*LINESPERRECORD)+1;
            lastRecordLine = (int) lastRecordStarts%(MAXCHARS*LINESPERRECORD);
            lineStart = lastRecordLine;
            lineEnd = lineStart+LINESPERRECORD;
//            System.out.println(lineStart+"||"+lineEnd);
            String res= readRandomAccessFile(filename,lineStart,lineEnd,MAXCHARS);
            Record record = new Record();
            record.sortRecord(res);
            fName = new TextField(record.getfName_());
            lName = new TextField(record.getlName_());
            poscode=new TextField(record.getPoscode_());
            city = new TextField(record.getCity_() );
            option.setValue(record.getProvince_());
            Stage ss = new Stage();
            showGridPane(ss);
        }
    }

    static class AddHandler implements EventHandler<ActionEvent> {

        @Override
        public void handle(ActionEvent actionEvent) {
            File file = new File(filename);
            Record record = new Record();
            try {
                String fNameAdd = record.stringToFixedLength(fName.getText());
                String lNameAdd = record.stringToFixedLength(lName.getText());
                String cityAdd = record.stringToFixedLength(city.getText());
                String provinceAdd = record.stringToFixedLength(option.getValue());
                String poscodeAdd = record.stringToFixedLength(poscode.getText());
                // set the pointer to the last line to initiate writing with file.length
                record.writeRecord(file, file.length(), fNameAdd, lNameAdd, cityAdd, provinceAdd, poscodeAdd);
            } catch (IOException e) {
                e.printStackTrace();
            }
            catch (NullPointerException e){
                System.out.println("YOU CANNOT ADD EMPTY VALUE");
            }
            System.out.println("Added!");
        }
    }
    static class UpdateHandler implements EventHandler<ActionEvent> {

        @Override
        public void handle(ActionEvent actionEvent) {
            File file = new File(filename);
            Record record = new Record();
            try {
                String fNameAdd = record.stringToFixedLength(fName.getText());
                String lNameAdd = record.stringToFixedLength(lName.getText());
                String cityAdd = record.stringToFixedLength(city.getText());
                String provinceAdd = record.stringToFixedLength(option.getValue());
                String poscodeAdd = record.stringToFixedLength(poscode.getText());
                // set the pointer to the current line to initiate writing with file.length
                record.updateRecord(file, lineStart, fNameAdd, lNameAdd, cityAdd, provinceAdd, poscodeAdd);
            } catch (IOException e) {
                e.printStackTrace();
            }
            catch (NullPointerException e){
                System.out.println("YOU CANNOT UPDATE EMPTY VALUE");
            }
            System.out.println("Updated!");
        }
    }

// idea from https://www.youtube.com/watch?v=dPFbwLwliB8
    public static String readRandomAccessFile(String filepath,int lineStart,int lineEnd, int charsPerLine){
        File file = new File(filepath);
        String data;
        ArrayList<String> lines = new ArrayList<>();
        int bytePerLine = charsPerLine+1; // 1 is new line symbol \n

        try {
            RandomAccessFile randomAccessFile = new RandomAccessFile(file,"rw");
            for (int i = lineStart;i<lineEnd;i++){
                randomAccessFile.seek(bytePerLine*i);
                data = randomAccessFile.readLine();
                lines.add(data);
            }
            randomAccessFile.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        StringBuilder returnData = new StringBuilder();
        for (String line : lines) {
            returnData.append(line);
        }
        System.out.println("return data from read method: "+returnData.toString());
        return returnData.toString();
    }
}
