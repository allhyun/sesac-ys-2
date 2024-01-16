package _02_20240116;

public class LoopControl {
    public static void main(String[] args) {
        for (int i = 0; i< 10; i++){
            System.out.println(i);
        }

        //while 문
        // -조건식이 참일 동안 while 블럭 실행
        System.out.println("========");
        int i = 1;
        while( i <= 10){
            System.out.println(i);
            i++;
        }
        // do-while문
        // -적어도 한번은 수행되는 반복문
        // - while 문과 다르게 조건식이 뒤에 배치
        System.out.println("-----------");
        int j = 1;
        do {
            System.out.println(j);
            j++;
        } while (j <=10);


        //////////////////////
        //for~ each 문
        // -collection type : 데이터 저장하고 관리하는 자료구조를 제공하는 클래스 모음
        //ex. List, Set, Map,Stack Vector 등등

        System.out.println("===========");
        String[] array = {"A","B","C"};
        for ( String a : array){
            System.out.println("a = " + a);
        }

    }
}
