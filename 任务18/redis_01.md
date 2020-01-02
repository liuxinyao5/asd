##Redis

###优点

- 基于内存管理数据的，称为内存数据库
- 读写速度异常快速
- 跨越进程，实现进程之间操作
- 做系统缓存提升性能
- 支持多种数据结构，例如字符串(string)、哈希(hash)、列表(list)、集合(set)、有序集合(zet)等
- 支持持久化，RDB和AOF机制
- 采用Key-Value结构存储数据

###命令

1. 字符串操作

	- set key value
	- get key
	- strlen key
	- incr key
	- incrby key n
	- decr key
	- decrby key n
	- append key value1

2. key 操作

	- keys *
	- del key
	- expire key n
	- type key
	- scan 0 count n

3. 哈希操作

	- hmset key field1 value1 field2 value2
	- hset key field value
	- hmget key field1 field2
	- hget key field
	- hlen key 
	- hkeys key
	- hdel key field

4. 列表操作

	- lpush key value
	- rpush key value
	- llen key
	- lrange key start stop
	- lpop key 
	- rpop
	- lindex key n
	- lrem key count value

5. 集合操作

	- sadd key value
	- srem key value
	- scard key
	- smembers key
	- sinter key1 key2
	- sdiff key1 key2
	- sunion key1 key2
	- srandmember key n 
	- spop key

6. 有序集合操作

	- zadd key score value
	- zrange key start stop withscores
	- zrevrange key start stop withscores
	- zcard key
	- zcount key min max
	- zscore key value

7. 其他操作

	- multi
	- exec 或 discard
	- save
	- subscribe xxx
	- publish xxx  消息

###Java操作

1. 基于jedis.jar驱动包访问

-	添加jedis.jar包引入
-	创建Jedis连接，执行各种操作


		Jedis jedis = new Jedis("192.168.95.128",6379);

		Set<String> keys = jedis.keys("*");//keys *

		String name = jedis.get("name");//get name

2. Spring Data访问Redis操作

	Spring框架：IOC、AOP、MVC、DAO

	Spring扩展：Data(redis、mongodb、jpa)


	提供了一套Template组件，例如RedisTemplate、MongoTemplate等


- 添加spring ioc、aop、dao、data-redis包
- 在spring添加RedisTemplate定义

		<bean id="redisFactory" class="org.springframework.data.redis.connection.jedis.JedisConnectionFactory">
			<property name="hostName" value="192.168.95.128"></property>
			<property name="port" value="6379"></property>
		</bean>
		
		<bean id="redisTemplate" class="org.springframework.data.redis.core.RedisTemplate">
			<property name="connectionFactory" ref="redisFactory"></property>
			<property name="keySerializer">
				<bean class="org.springframework.data.redis.serializer.StringRedisSerializer"/>
			</property>
		</bean>

- 使用Spring容器redisTemplate操作redis存取

		public static void main(String[] args) {
			String conf = "applicationContext.xml";
			ApplicationContext ac = 
				new ClassPathXmlApplicationContext(conf);
			RedisTemplate<Object,Object> redis = ac.getBean(RedisTemplate.class);
			Emp emp = new Emp();
			emp.setEmpno(101);
			emp.setEname("java");
			emp.setSal(8000.0);
			emp.setHiredate(new Date());
			//存
			redis.opsForValue().set("emp:101", emp);
			//取
			Emp e = (Emp)redis.opsForValue().get("emp:101");
			System.out.println(e.getEmpno()+" "+e.getEname()+" "+e.getSal());
		}