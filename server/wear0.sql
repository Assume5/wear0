-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: wear0
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user` varchar(500) NOT NULL,
  `productid` varchar(100) NOT NULL,
  `productImage` varchar(200) NOT NULL,
  `productName` varchar(50) NOT NULL,
  `productPrice` double(10,2) NOT NULL,
  `productSize` varchar(50) NOT NULL,
  `quantity` tinyint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guest`
--

DROP TABLE IF EXISTS `guest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guest` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cookievalue` varchar(500) NOT NULL,
  `joineddate` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cookievalue` (`cookievalue`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guest`
--

LOCK TABLES `guest` WRITE;
/*!40000 ALTER TABLE `guest` DISABLE KEYS */;
INSERT INTO `guest` VALUES (55,'323','2021-12-20'),(56,'$2a$10$KG5TahmQYJsT2iRcnBSh8.Ui8Idgtpqi6LcczwQi5GSOQtQHO7eJ6','2021-12-20');
/*!40000 ALTER TABLE `guest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guestcart`
--

DROP TABLE IF EXISTS `guestcart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guestcart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ownercookievalue` varchar(500) NOT NULL,
  `productid` varchar(100) NOT NULL,
  `productImage` varchar(200) NOT NULL,
  `productName` varchar(50) NOT NULL,
  `productPrice` double(10,2) NOT NULL,
  `productSize` varchar(50) NOT NULL,
  `quantity` tinyint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guestcart`
--

LOCK TABLES `guestcart` WRITE;
/*!40000 ALTER TABLE `guestcart` DISABLE KEYS */;
/*!40000 ALTER TABLE `guestcart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderdetails`
--

DROP TABLE IF EXISTS `orderdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderdetails` (
  `orderId` varchar(100) DEFAULT NULL,
  `productid` varchar(100) NOT NULL,
  `productImage` varchar(200) NOT NULL,
  `productName` varchar(50) NOT NULL,
  `productPrice` double(10,2) NOT NULL,
  `productSize` varchar(50) NOT NULL,
  `quantity` tinyint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderdetails`
--

LOCK TABLES `orderdetails` WRITE;
/*!40000 ALTER TABLE `orderdetails` DISABLE KEYS */;
/*!40000 ALTER TABLE `orderdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `orderId` varchar(100) NOT NULL,
  `userId` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `cardHolder` varchar(200) NOT NULL,
  `cardHolderFirst` varchar(100) NOT NULL,
  `cardHolderLast` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `cardNumber` varchar(100) NOT NULL,
  `shippingName` varchar(200) NOT NULL,
  `shippingFirst` varchar(100) NOT NULL,
  `shippingLast` varchar(100) NOT NULL,
  `shippingAddress1` varchar(100) NOT NULL,
  `shippingAddress2` varchar(100) DEFAULT NULL,
  `shippingCity` varchar(100) NOT NULL,
  `shippingState` varchar(100) NOT NULL,
  `shippingZip` varchar(100) NOT NULL,
  `billingAddress1` varchar(100) NOT NULL,
  `billingCity` varchar(100) NOT NULL,
  `billingState` varchar(100) NOT NULL,
  `billingZip` varchar(100) NOT NULL,
  `orderDate` date NOT NULL,
  `trackingNumber` varchar(100) DEFAULT NULL,
  `orderStatus` varchar(100) DEFAULT NULL,
  `totalPrice` double(10,2) NOT NULL,
  PRIMARY KEY (`orderId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productId` varchar(50) NOT NULL,
  `productName` varchar(50) NOT NULL,
  `productImg1` varchar(200) DEFAULT NULL,
  `productImg2` varchar(200) DEFAULT NULL,
  `productImg3` varchar(200) DEFAULT NULL,
  `productImg4` varchar(200) DEFAULT NULL,
  `productSize` varchar(20) NOT NULL,
  `productColor` varchar(100) NOT NULL,
  `productMaterial` varchar(20) NOT NULL,
  `productDesc` text NOT NULL,
  `productPrice` double(10,2) NOT NULL,
  `productCheckout` smallint NOT NULL,
  `productCategory` varchar(20) NOT NULL,
  `productBrand` varchar(100) NOT NULL,
  `productType` varchar(100) NOT NULL,
  `Gender` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `productId` (`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'1-45','Men Hoodies New','/public/productImages/1-45/grey.png','/public/productImages/1-45/greyturn.png','/public/productImages/1-45/brown.png','','multisize','Brown','Vinyl','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus. Bibendum enim facilisis gravida neque convallis a. Faucibus nisl tincidunt eget nullam non nisi est sit. Sem fringilla ut morbi tincidunt.',99.99,4,'New','Brand1','Hoodies/Sweatshirts','Men'),(2,'1-46','Kids Jackets New','/public/productImages/1-46/brown.png','/public/productImages/1-46/brownturn.png','/public/productImages/1-46/grey.png','/public/productImages/1-46/greyturn.png','onesize','Brown','Vinyl','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus. Bibendum enim facilisis gravida neque convallis a. Faucibus nisl tincidunt eget nullam non nisi est sit. Sem fringilla ut morbi tincidunt.',99.99,0,'New','Brand5','Jackets','Kid'),(3,'1-47','Women Pants New','/public/productImages/1-47/brown.png','/public/productImages/1-47/brownturn.png','','','onesize','Brown','Vinyl','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus. Bibendum enim facilisis gravida neque convallis a. Faucibus nisl tincidunt eget nullam non nisi est sit. Sem fringilla ut morbi tincidunt.',99.99,1,'New','Brand2','Pants','Women'),(4,'1-48','Mens T Shirts New','/public/productImages/1-48/brown.png ','/public/productImages/1-48/brownturn.png','','','onesize','Brown','Vinyl','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus. Bibendum enim facilisis gravida neque convallis a. Faucibus nisl tincidunt eget nullam non nisi est sit. Sem fringilla ut morbi tincidunt.',99.99,0,'New','Brand4','T-shirts/Tanks','Men'),(5,'1-49','Kid Sweaters New','/public/productImages/1-49/brown.png ','/public/productImages/1-49/brownturn.png','','','multisize','Brown','Vinyl','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus. Bibendum enim facilisis gravida neque convallis a. Faucibus nisl tincidunt eget nullam non nisi est sit. Sem fringilla ut morbi tincidunt.',99.99,2,'New','Brand1','Sweaters','Kid'),(6,'1-50','Women Jeans','/public/productImages/1-50/brown.png ','/public/productImages/1-50/brownturn.png','','','onesize','Brown','Vinyl','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus. Bibendum enim facilisis gravida neque convallis a. Faucibus nisl tincidunt eget nullam non nisi est sit. Sem fringilla ut morbi tincidunt.',99.99,0,'New','Brand2','Jeans','Women'),(7,'1-51','Men Accessories','/public/productImages/1-51/brown.png ','/public/productImages/1-51/brownturn.png','','','onesize','Brown','Vinyl','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus. Bibendum enim facilisis gravida neque convallis a. Faucibus nisl tincidunt eget nullam non nisi est sit. Sem fringilla ut morbi tincidunt.',99.99,0,'New','Brand3','Accessories','Men'),(8,'1-52','Kid Shorts','/public/productImages/1-52/brown.png ','/public/productImages/1-52/brownturn.png','','','onesize','Brown','Vinyl','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus. Bibendum enim facilisis gravida neque convallis a. Faucibus nisl tincidunt eget nullam non nisi est sit. Sem fringilla ut morbi tincidunt.',99.99,2,'New','Brand4','Shorts','Kid'),(9,'1-53','Men SleepWear','/public/productImages/1-53/brown.png ','/public/productImages/1-53/brownturn.png','','','multisize','Brown','Vinyl','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus. Bibendum enim facilisis gravida neque convallis a. Faucibus nisl tincidunt eget nullam non nisi est sit. Sem fringilla ut morbi tincidunt.',99.99,0,'MenFootwear','Brand5','SleepWear/Loungewear','Men'),(10,'1-54','Men Bag','/public/productImages/1-54/brown.png ','/public/productImages/1-54/brownturn.png','','','onesize','Brown','Vinyl','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus. Bibendum enim facilisis gravida neque convallis a. Faucibus nisl tincidunt eget nullam non nisi est sit. Sem fringilla ut morbi tincidunt.',99.99,0,'MenAccessories','Brand1','Bag','Men'),(11,'1-55','Men Socks','/public/productImages/1-55/brown.png ','/public/productImages/1-55/brownturn.png','','','onesize','Brown','Vinyl','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus. Bibendum enim facilisis gravida neque convallis a. Faucibus nisl tincidunt eget nullam non nisi est sit. Sem fringilla ut morbi tincidunt.',99.99,0,'MenApparel','Brand2','Socks','Men'),(12,'1-56','Women SwimWear','/public/productImages/1-56/brown.png ','/public/productImages/1-56brownturn.png','','','onesize','Brown','Vinyl','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus. Bibendum enim facilisis gravida neque convallis a. Faucibus nisl tincidunt eget nullam non nisi est sit. Sem fringilla ut morbi tincidunt.',99.99,0,'WomenFootwear','Brand3','SwimWear','Women'),(13,'1-57','Women Bag','/public/productImages/1-57/brown.png ','/public/productImages/1-57/brownturn.png','','','multisize','Brown','Vinyl','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus. Bibendum enim facilisis gravida neque convallis a. Faucibus nisl tincidunt eget nullam non nisi est sit. Sem fringilla ut morbi tincidunt.',99.99,0,'WomenAccessories','Brand4','Bag','Women'),(14,'1-58','Women Jackets','/public/productImages/1-58/brown.png ','/public/productImages/1-58/brownturn.png','','','onesize','Brown','Vinyl','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus. Bibendum enim facilisis gravida neque convallis a. Faucibus nisl tincidunt eget nullam non nisi est sit. Sem fringilla ut morbi tincidunt.',99.99,1,'WomenApparel','Brand5','Jackets','Women'),(15,'1-59','Kid Footwea','/public/productImages/1-59/brown.png ','/public/productImages/1-59/brownturn.png','','','onesize','Brown','Vinyl','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus. Bibendum enim facilisis gravida neque convallis a. Faucibus nisl tincidunt eget nullam non nisi est sit. Sem fringilla ut morbi tincidunt.',99.99,0,'KidFootwear','Brand1','Bag','Kid'),(16,'1-60','Kid Apparel T Shirt','/public/productImages/1-60/brown.png ','/public/productImages/1-60/brownturn.png','','','onesize','Brown','Vinyl','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus. Bibendum enim facilisis gravida neque convallis a. Faucibus nisl tincidunt eget nullam non nisi est sit. Sem fringilla ut morbi tincidunt.',99.99,0,'KidApparel','Brand2','T-shirts/Tanks','Kid'),(17,'1-61','Men Sweaters','/public/productImages/1-61/brown.png ','/public/productImages/1-61/brownturn.png','','','multisize','Brown','Vinyl','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus. Bibendum enim facilisis gravida neque convallis a. Faucibus nisl tincidunt eget nullam non nisi est sit. Sem fringilla ut morbi tincidunt.',99.99,0,'SaleMen','Brand3','Sweaters','Men'),(18,'1-62','Kid Jeans','/public/productImages/1-62/brown.png ','/public/productImages/1-62/brownturn.png','','','onesize','Brown','Vinyl','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus. Bibendum enim facilisis gravida neque convallis a. Faucibus nisl tincidunt eget nullam non nisi est sit. Sem fringilla ut morbi tincidunt.',99.99,0,'SaleKid','Brand4','Jeans','Kid'),(19,'1-63','Women Accessories','/public/productImages/1-63/brown.png ','/public/productImages/1-63/brownturn.png','','','onesize','Brown','Vinyl','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus. Bibendum enim facilisis gravida neque convallis a. Faucibus nisl tincidunt eget nullam non nisi est sit. Sem fringilla ut morbi tincidunt.',99.99,0,'SaleWomen','Brand5','Accessories','Women'),(20,'1-64','Men Shorts','/public/productImages/1-64/brown.png ','/public/productImages/1-64/brownturn.png','','','onesize','Brown','Vinyl','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus. Bibendum enim facilisis gravida neque convallis a. Faucibus nisl tincidunt eget nullam non nisi est sit. Sem fringilla ut morbi tincidunt.',99.99,1,'SaleMen','Brand1','Shorts','Men'),(21,'1-65','Kid SleepWear','/public/productImages/1-65/brown.png ','/public/productImages/1-65/brownturn.png','','','multisize','Brown','Vinyl','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus. Bibendum enim facilisis gravida neque convallis a. Faucibus nisl tincidunt eget nullam non nisi est sit. Sem fringilla ut morbi tincidunt.',99.99,0,'SaleKid','Brand2','SleepWear/Loungewear','Kid');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productId` varchar(50) NOT NULL,
  `productSize` varchar(50) NOT NULL,
  `productSizeStock` smallint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
INSERT INTO `stock` VALUES (1,'1-45','3',1),(2,'1-45','4',46),(3,'1-45','5',47),(4,'1-45','6',47),(5,'1-45','7',48),(6,'1-45','8',0),(7,'1-45','9',46),(8,'1-45','10',46),(9,'1-45','11',0),(10,'1-45','12',0),(11,'1-45','13',0),(12,'1-45','14',0),(13,'1-45','15',0),(14,'1-46','0',496),(15,'1-47','0',496),(16,'1-48','0',500),(17,'1-49','3',50),(18,'1-49','4',50),(19,'1-49','5',50),(20,'1-49','6',50),(21,'1-49','7',50),(22,'1-49','8',0),(23,'1-49','9',50),(24,'1-49','10',50),(25,'1-49','11',0),(26,'1-49','12',0),(27,'1-49','13',0),(28,'1-49','14',0),(29,'1-49','15',0),(30,'1-50','0',500),(31,'1-51','0',500),(32,'1-52','0',490),(33,'1-53','3',50),(34,'1-53','4',50),(35,'1-53','5',50),(36,'1-53','6',50),(37,'1-53','7',50),(38,'1-53','8',0),(39,'1-53','9',50),(40,'1-54','0',500),(41,'1-55','0',500),(42,'1-56','0',500),(43,'1-57','3',50),(44,'1-57','4',50),(45,'1-57','5',50),(46,'1-57','6',50),(47,'1-57','7',50),(48,'1-57','8',0),(49,'1-57','9',50),(50,'1-58','0',498),(51,'1-59','0',500),(52,'1-60','0',500),(53,'1-61','3',50),(54,'1-61','4',50),(55,'1-61','5',50),(56,'1-61','6',50),(57,'1-61','7',50),(58,'1-61','8',0),(59,'1-61','9',50),(60,'1-62','0',500),(61,'1-63','0',500),(62,'1-64','0',498),(63,'1-65','3',50),(64,'1-65','4',50),(65,'1-65','5',50),(66,'1-65','6',50),(67,'1-65','7',50),(68,'1-65','8',0),(69,'1-65','9',50);
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `fullname` varchar(100) DEFAULT NULL,
  `first` varchar(100) DEFAULT NULL,
  `last` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `address1` varchar(100) DEFAULT NULL,
  `address2` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `zip` varchar(100) DEFAULT NULL,
  `password` varchar(200) NOT NULL,
  `joineddate` date NOT NULL,
  `hashedId` varchar(500) NOT NULL,
  `sessionExpires` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-23 19:08:57
