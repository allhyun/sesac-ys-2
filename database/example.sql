 
 create table exampleuser(
 id VARCHAR(10) primary key not null,
 pw VARCHAR(20) NOT NULL,
 name VARCHAR(5) NOT NULL,
 gender ENUM('F','M','') default '',
 birthday DATE not null,
 age int(3) not null default 0
 );
 
 select * from exampleuser;
 desc exampleuser;
INSERT INTO exampleuser VALUES('hong1234', '804bkg', '홍길동', 'M', '1990-01-31', '33');
INSERT INTO exampleuser VALUES('sexyhong', '87awjkdf', '성춘향', 'F', '1992-03-31', '31');
INSERT INTO exampleuser VALUES('power70', 'sldkajnc', '변사또', 'M', '1970-05-02', '53');
INSERT INTO exampleuser VALUES('hanjo', 'asdgvcx', '한조', 'M', '1984-10-18', '53');
INSERT INTO exampleuser VALUES('window', '2asf21cx', '위도우', 'F', '1976-06-27', '39');
INSERT INTO exampleuser VALUES('dvadva', 'kdlkx123', '송하나', 'F', '2001-06-02', '22');
INSERT INTO exampleuser VALUES('jungkragt', '4sdfvd', '정그랫', 'M', '1999-11-11', '24');
 select * from exampleuser;
 
select * from exampleuser order by birthday asc;
select * from exampleuser where gender = 'M' order by name desc;
select id,age from exampleuser where birthday like '%1990%' ;
select * from exampleuser where birthday like '___-06%' order by birth asc;
select * from exampleuser where gender='M' and birthday between '1970-01-01' and '1979-12-31';
select * from exampleuser order by age desc limit 3;
select * from exampleuser where age between '25' and  '50';
