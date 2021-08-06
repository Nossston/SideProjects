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

import java.util.ArrayList;

public class DoubleArrayFunctions implements ArrayProcessor {
    @Override
    public double apply(ArrayList<Double> array) {
        return array.get(0);
    }


    public static ArrayProcessor counter ( double value) {
        return a->{
            int j = 0;
            for( double i : a )
                if ( i == value) j++;
            return j;
        } ;
    }

    public static final ArrayProcessor applyMax = array-> {
//        System.out.println(array.getClass());
        double max = array.get(0);
        for ( double i : array )
            if( i > max) max=i;
        return max;
    };

    public static final ArrayProcessor applyMin = a-> {
        double min= a.get(0) ;
        for ( double i :a ){
            if (i < min) min=i;
        }
        return min;
    };
    public static final ArrayProcessor sumOf = a-> {
        double sum = 0;
        for (double i : a) {
            sum+=i;
        }
        return sum;
    } ;
    public static final ArrayProcessor avgOf =  a ->{
        double avg = 0;
        for (double i : a) {
            avg+=i;
        }
        return avg/a.size();
    };
}
