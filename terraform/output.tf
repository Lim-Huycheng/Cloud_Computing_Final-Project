output "asg_name" {
  value = aws_autoscaling_group.web_asg.name
}

output "load_balancer_dns" {
  value = aws_lb.web_lb.dns_name
}

output "s3_bucket_name" {
  value = aws_s3_bucket.website_assets.bucket
}
