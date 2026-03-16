CREATE TABLE `fileUploads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`fileKey` varchar(500) NOT NULL,
	`fileName` varchar(255) NOT NULL,
	`fileUrl` text NOT NULL,
	`mimeType` varchar(100) NOT NULL,
	`fileSize` int NOT NULL,
	`uploadedBy` int,
	`relatedLeadId` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `fileUploads_id` PRIMARY KEY(`id`),
	CONSTRAINT `fileUploads_fileKey_unique` UNIQUE(`fileKey`)
);
--> statement-breakpoint
CREATE TABLE `leads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20),
	`service` varchar(100),
	`message` text,
	`source` varchar(50) NOT NULL DEFAULT 'website',
	`status` enum('new','contacted','qualified','lost') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `leads_id` PRIMARY KEY(`id`)
);
