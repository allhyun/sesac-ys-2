show databases;

-- 데이터 베이스 생성하는 명령어
CREATE DATABASE sesac_test DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci;

-- 데이터 베이스 선택하는 명령어
use sesac_test;

-- 테이블을 조회하는 명령어 (데이터 베이스가 선택이 되어 있어야 함.)
show tables;

-- 테이블을 생성하는 명령어
create table user(
	id varchar(10) primary key not null,
    password varchar(20) not null,
    age int unsigned
);

-- 만들어진 테이블에 
-- 1) 컬럼을 추가하는 명령어 
alter table user add gender enum('여자','남자'); 
-- 2) 컬럼을 삭제하는 명령어 
alter table user drop column age;
-- 3) 컬럼을 수정하는 명령어
alter table user modify gender varchar(2) not null;

-- 테이블을 삭제하는 명령어
drop table user;

-- 테이블 구조를 확인하는 명령어
desc user;


CREATE TABLE customer 
( 
  custid CHAR(10) NOT NULL PRIMARY KEY,
  custname VARCHAR(10) NOT NULL, 
  addr CHAR(10) NOT NULL, 
  phone CHAR(11), 
  birth DATE 
);

CREATE TABLE orders 
(  orderid   INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
   custid    CHAR(10) NOT NULL, 
   prodname  CHAR(6) NOT NULL, 
   price     INT  NOT NULL, 
   amount    SMALLINT  NOT NULL,
   FOREIGN KEY (custid) REFERENCES customer(custid)
);
INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('kiwi', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍지수', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');

select * from customer;





INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);
INSERT INTO orders VALUES(NULL, 'kiwi', '새우깡', 1200, 1);
INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'kiwi', '꼬깔콘', 1700, 2);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'kiwi', '고구마깡', 1300, 3);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);

select * from orders;

desc customer;
select*from customer;

-- custid가 bunny인 회원
select * from customer where custid='bunny';
-- custid가 bunny가 아닌 회원
select * from customer where custid !='bunny';
select * from customer where not custid='bunny';

-- custid가 2000-01-010이후인 회원
select * from customer where birth >= '2000-01-01';
-- 2000-01-01 ~ 2005-0101 사이에 태어난 회원 조회
select * from customer where birth between  '2000-01-01'and '2005-01-01';

select * from customer where addr in ('대한민국 서울', '미국 로스앤젤레스' );
-- addr 가 대한민국을 포함한 회원 조회
select * from customer where addr like '%대한민국%';

select * from customer where custname like '__수';

select * from customer where custname like '_해_';

-- is null 사용예시 null값을 가진 경우를 가져온다.
select * from customer where custname is null;

-- AND, OR, NOT 조건을 두개 이상을 걸고 싶을때
select * from customer where addr like'%대한민국%' AND birth <= '2000-05-05';
select * from customer where addr like'%대한민국%' OR birth <= '2000-05-05';

select * from customer order by custname desc;

-- addr에 대한민국을 포함하고 있는 회원 조회. custname 기준으로 조회해서 내림차순

select * from customer where addr like '%대한민국%'
 order by custname desc
 limit 1;
 -- 정렬된 기준으로 첫번째 기준만 가져온다.