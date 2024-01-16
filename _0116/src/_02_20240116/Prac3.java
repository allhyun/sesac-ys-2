package _02_20240116;

import java.util.Scanner;

public class Prac3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("숫자를 입력하시오");
        int n = scanner.nextInt();
        for ( int i =1 ; i <= n; i++){
            System.out.println( i +"");
        }
        scanner.close();
    }
}
