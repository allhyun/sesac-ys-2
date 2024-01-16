package _02_20240116;

import java.util.Scanner;

public class Prac2 {
    public static void main(String[] args) {
        System.out.println("나이를 입력해주세요");
        Scanner scanner = new Scanner(System.in);
        int age = scanner.nextInt();//엔터이전까지의 문자열을 받음
        System.out.println("age 값 확인 : " + age );
        if(age>=1 && age<=7){
            System.out.println("유아!");
        } else if(age>=8 && age<=13) {
            System.out.println("초등학생");
        } else if (age >=14 && age<=16){
            System.out.println("중학생");
        } else if (age >=17 && age<=19){
            System.out.println("고등학생");
        } else if( age>=20){
            System.out.println("성인");
        };

        System.out.println("이름을 입력해주세요");
        Scanner prac = new Scanner(System.in);
        String name = prac.nextLine();
        if( name .equals("홍길동")){
            System.out.println("남자");
        } else if (name.equals("성춘향")){
            System.out.println("여자");
        } else{
            System.out.println("몰라요");
        }





    };
}
