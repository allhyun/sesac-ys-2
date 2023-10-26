show databases;

use sesac_test;

-- 데이터 베이스 생성하는 명령어
CREATE TABLE user(

id varchar(10) primary key not null,
password varchar(20) not null,
age int unsigned
gender enum('여자','남자') default '여자'
);

-- 컬럼을 추가하는 명령어
alter table user add gender enum('여자','남자') not null;
-- 컬럼을 삭제하는 명령어
alter table user drop column age;
-- 컬럼을 수정하는 명령어
alter table user modify gender varchar(2) not null;

-- 테이블을ㅇ 삭젷는 명령어

drop table user;


select * from user;


-- 테이블을 조회하는 명렁어(데이터베이스가 선택이 되어있어야함.)
show tables;

CREATE TABLE member(
id varchar(20) primary key not null,
name varchar(5) not null,
age int,
gender varchar(2) not null,
email varchar(50),
promotion varchar(2) default'x');

show tables;

desc member;
alter table member modify id varchar(10) not null;
alter table member modify age varchar(2);
alter table member drop column age;
alter table member add interest varchar(100);

desc member;