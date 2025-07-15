variable "aws_region" {
  default = "us-east-1"
}

variable "bucket_name" {
  description = "S3 bucket name for static assets"
}

variable "instance_type" {
  default = "t2.micro"
}

variable "key_name" {
  description = "EC2 SSH key pair name"
}

variable "my_ip" {
  description = "Your IP for SSH access"
  default     = "0.0.0.0/0"
}

variable "baked_ami_id" {
  description = "The ID of the baked AMI created by Packer"
  type        = string
}
