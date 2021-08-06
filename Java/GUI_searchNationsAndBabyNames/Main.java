/**********************************************
 Workshop 7 && 6
 Course:<JAC444NCC> - 4th Semester
 Last Name: Liu
 First Name: Yu-Che
 ID:134379189
 Section:NCC
 This assignment represents my own work in accordance with Seneca Academic Policy. Signature
Date:2020/11/16
 **********************************************/
package NostonWS6;

import javafx.application.Application;
import javafx.application.Platform;
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
import javafx.scene.layout.GridPane;
import javafx.stage.Stage;
import java.awt.*;
import java.io.File;
import java.util.ArrayList;


public class Main extends Application {
    static TextField year = new TextField("2009");
    static TextField gender = new TextField("M");
    static TextField name = new TextField("Avery");

    @Override
    public void start(Stage primaryStage) {
        showGridPane(primaryStage);
    }

    public static void main(String[] args) {
        launch(args);
    }

    public static void showGridPane(Stage primaryStage) {
        GridPane pane = new GridPane();
        pane.setAlignment(Pos.CENTER);
        pane.setPadding(new Insets(25, 50, 25, 50));
        pane.setHgap(5);
        pane.setVgap(13.5);
        pane.add(new Label("Enter the Year: "), 0, 0);
        pane.add(year, 1, 0);
        pane.add(new Label("This is the value sent to rank"),2,0);
        pane.add(new Label("Enter the Gender: "), 0, 1);
        pane.add(gender, 1, 1);
        pane.add(new Label("Enter the Name: "), 0, 2);
        pane.add(name, 1, 2);

        final int NUM = 5;
        Button[] bt = new Button[NUM];
        bt[0] = new Button("Submit Query");
        bt[1] = new Button("Lambda Task");
        bt[2] = new Button("Year Rank");
        bt[3] = new Button("Nation");
        bt[4] = new Button("Exit");

        for (int i = 0; i < NUM; i++) {
            pane.add(bt[i], i, 4);
            GridPane.setHalignment(bt[i], HPos.CENTER);
            bt[i].setMinWidth(80);
        }

        bt[0].setOnAction(e -> {
            primaryStage.close();
            new SubmitHandler().handle(e);
        });
//        LambdaTestHandler lambdaTestHandler = new LambdaTestHandler();
        bt[1].setOnAction(e -> {
            primaryStage.close();
            new LambdaTestHandler().handle(e);
        });
        bt[2].setOnAction(e -> {
            new UnisexHandler().handle(e);
            primaryStage.close();
        });
        bt[3].setOnAction(e->{
            new NationHandler().handle(e);
            primaryStage.close();

        });
        bt[4].setOnAction(e -> {
            Platform.exit();
            System.exit(0);
        });

        primaryStage.setTitle("WS6 && 7");
        Scene scene = new Scene(pane);
        primaryStage.setScene(scene);
        Dimension d= Toolkit.getDefaultToolkit().getScreenSize(); // get screen size
        primaryStage.setX((d.width/7) *2);
        primaryStage.setY((d.height/7) *2);
        primaryStage.show();
    }

    static class SubmitHandler implements EventHandler<ActionEvent> {

        @Override
        public void handle(ActionEvent actionEvent) {
            int rank = 0;
            GridPane pane = new GridPane();
            pane.setAlignment(Pos.CENTER);
            pane.setPadding(new Insets(50, 50, 50, 50));
            pane.setHgap(5);
            pane.setVgap(13.5);
            Stage ss = new Stage();
            Search search = new Search();


            rank = search.showRank(year.getText(), gender.getText(), name.getText());
            String result = search.genderResult(gender.getText()) + " name " + name.getText() +
                    " is ranked #" + rank + " in " + year.getText();


            Label label1 = new Label(result);
            Button button1 = new Button("Search another one");
            button1.setOnAction(e -> showGridPane(ss));
            ss.close();
            Button button2 = new Button("Exit");
            button2.setOnAction(e -> {
                Platform.exit();
                System.exit(0);
            });
            pane.add(label1, 0, 0);
            pane.add(button1, 0, 3);
            pane.add(button2, 1, 3);
            Scene scene = new Scene(pane);
            ss.setScene(scene);
            ss.show();
        }
    }

    static class LambdaTestHandler implements EventHandler<ActionEvent> {

        static ArrayList<Double> doubleArray = new ArrayList<>();
        static TextField input = new TextField("30");
        static String res = "";
        static String outcome;

        @Override
        public void handle(ActionEvent actionEvent) {
            GridPane pane = new GridPane();
            pane.setAlignment(Pos.CENTER);
            pane.setPadding(new Insets(25, 200, 70, 50));
            pane.setHgap(5);
            pane.setVgap(13.5);
            pane.add(new Label("Enter a number"), 0, 0);
            pane.add(input, 0, 1);
            pane.add(new Label(res), 0, 2);
            Button[] btn = new Button[7];
            btn[0] = new Button("Add");
            btn[0].setOnAction(e -> {
                doubleArray.add(Double.parseDouble(input.getText()));
                res += input.getText() + ", ";
                pane.add(new Label(res), 0, 2);
                System.out.println("Counter for 30: " + DoubleArrayFunctions.counter(30).apply(doubleArray));
//                String count = Double.toString(DoubleArrayFunctions.counter(30).apply(doubleArray));
//                pane.add( new Label(count),1,2);
            });
            btn[1] = new Button("FindMax");
            btn[1].setOnAction(e -> {
                outcome = "Max is: " + (DoubleArrayFunctions.applyMax.apply(doubleArray));
                pane.add(new Label(outcome), 0, 4);
            });


            btn[2] = new Button("FindMin");
            btn[2].setOnAction(e -> {
                outcome = "Min is :" + (DoubleArrayFunctions.applyMin.apply(doubleArray));
                pane.add(new Label(outcome), 0, 5);
            });
            btn[3] = new Button("Sum");
            btn[3].setOnAction(e -> {
                outcome = "Sum is :" + DoubleArrayFunctions.sumOf.apply(doubleArray);
                pane.add(new Label(outcome), 0, 6);
            });
            btn[4] = new Button("Avg");
            btn[4].setOnAction(e -> {
                outcome = "Average is: " + DoubleArrayFunctions.avgOf.apply(doubleArray);
                pane.add(new Label(outcome), 0, 7);
            });

            Stage ss = new Stage();
            btn[5] = new Button("Clear");
            btn[5].setOnAction(e -> {
                ss.close();
                res = "";
                doubleArray.clear();
                new LambdaTestHandler().handle(e);
            });
            btn[6] = new Button("Back");
            btn[6].setOnAction(e -> {
                ss.close();
                res = "";
                doubleArray.clear();
                showGridPane(ss);
            });
            for (int i = 0; i < btn.length; i++) {
                pane.add(btn[i], i + 1, 3);
                btn[i].setMinWidth(80);
            }
            Scene scene = new Scene(pane, 1500, 300);
            ss.setScene(scene);
            ss.show();
        }

    }

    // WS7
    static class UnisexHandler implements EventHandler<ActionEvent> {

        @Override
        public void handle(ActionEvent actionEvent) {
            int rank = UnisexName.show(year.getText());
            GridPane pane = new GridPane();
//            pane.setAlignment(Pos.CENTER);
            pane.setPadding(new Insets(50, 50, 50, 50));
            pane.setHgap(5);
            pane.setVgap(13.5);
            Stage ss = new Stage();
            String result = rank+" names used for both genders in "+year.getText()+
                    "\n There are :" + UnisexName.result.get(0) +"...."
                    +UnisexName.result.get(UnisexName.result.size()-1)+
                    "     Full list ->";
            Label label1 = new Label(result);
            Button button1 = new Button("Search another one");

            button1.setOnAction( e->{
                ss.close();
                showGridPane(ss);
            });

            Button button2 = new Button("Exit");
            button2.setOnAction(e -> {
                Platform.exit();
                System.exit(0);
            });
            pane.add(label1, 0, 0);
            pane.add(button1, 0, 3);
            pane.add(button2, 1, 3);

            ComboBox<String> _option = new ComboBox<>(FXCollections.observableArrayList(UnisexName.result));
            pane.add(_option,3,0);
            Scene scene = new Scene(pane);
            ss.setScene(scene);
            Dimension d= Toolkit.getDefaultToolkit().getScreenSize(); // get screen size
            ss.setX((d.width/7) *2);
            ss.setY((d.height/7) *2);
            ss.show();
        }
    }

    static class NationHandler implements EventHandler<ActionEvent> {
            static TextField nation = new TextField("");
            static TextField capital = new TextField("");
            static Label[] labels = new Label[5];
            static Button[] buttons = new Button[3];
        @Override
        public void handle(ActionEvent actionEvent) {
            Stage stage = new Stage();
            GridPane pane = new GridPane();
            pane.setPadding(new Insets(25, 50, 25, 50));
            pane.setHgap(21);
            pane.setVgap(15.5);
            File file = new File("Nations.txt");
            Nation.show(file);
            System.out.println(Nation.getCapitals().get(0));
            labels[0]= new Label("Nation: ");
            labels[3]= new Label("Nation List: ");
            labels[1]= new Label("Capitals: ");
            labels[4]= new Label("Capitals List: ");
            labels[2] = new Label("Result: ");
            pane.add(labels[0], 0,0);
            pane.add(nation,1,0);
            pane.add(labels[1], 0,1);
            pane.add(capital, 1,1);
            ComboBox<String> N_option = new ComboBox<>(FXCollections.observableArrayList(Nation.getNations()));
            pane.add(N_option,3,0);
            pane.add(labels[3],2,0 );
            ComboBox<String> C_option = new ComboBox<>(FXCollections.observableArrayList(Nation.getCapitals()));
            pane.add(C_option,3,1);
            pane.add(labels[4],2,1 );


            // here I need to add col
            // col,row, colspan, rowSpan
            pane.add(labels[2],1,2,3,1 );

            buttons[0] =  new Button("Show Capital");
            buttons[1] = new Button("Show Nation");
            buttons[2] = new Button("Back");

            nation.setText(Nation.getNations().get((int) (Math.random()*Nation.getNations().size())+1));
            capital.setText(Nation.getCapitals().get((int) (Math.random()*Nation.getCapitals().size())+1));

            buttons[0].setOnAction(e->{
                labels[2].setText("The capital of " +nation.getText()+ " is: "
                +Nation.getCapitalByNation(nation.getText()) );
            });

            buttons[1].setOnAction( e->{
                labels[2].setText("The nation of " +capital.getText()+ " is: "
                +Nation.getNationByCapital(capital.getText()));
            });
            buttons[2].setOnAction(e->{
                stage.close();
                showGridPane(stage);
            });
            for (int i = 0; i < buttons.length; i++) {
                pane.add(buttons[i], i + 1, 3);
                buttons[i].setMinWidth(80);
            }
            Scene scene = new Scene(pane);
            stage.setScene(scene);
            Dimension d= Toolkit.getDefaultToolkit().getScreenSize(); // get screen size
            stage.setX((d.width/7) *2);
            stage.setY((d.height/7) *2);
            stage.show();
        }
    }
}
