package _20240116;

import java.util.Scanner;

public class Practice {
    public static void main(String[] args) {
        Scanner practice = new Scanner(System.in);

        System.out.println("이름을 입력하세요");
        String name = practice.next();
        System.out.println(name);
        System.out.println("나이를 입력하세요");
        int age = practice.nextInt();
        System.out.println( age);
        System.out.println("안녕하세요"+name+"님("+age+"세)");

        practice.close();


    }
}
