resource "random_string" "suffix" {
  length  = 7
  upper   = false
  special = false
}

locals {
  bucket_name = "${var.app_name}-${random_string.suffix.result}"
}

resource "aws_s3_bucket" "static-website" {
  bucket = local.bucket_name
  tags = {
    Name = "Personal Brand Web Bucket"

  }
}

resource "aws_s3_bucket_public_access_block" "block" {
  bucket = aws_s3_bucket.static-website.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_website_configuration" "website-config" {
  bucket = aws_s3_bucket.static-website.id
  index_document {
    suffix = "index.html"
  }

}

data "aws_iam_policy_document" "s3_policy" {
  statement {
    effect = "Allow"
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.static-website.arn}/*"]
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.cdn.arn]
    }
  }
}

resource "aws_s3_bucket_policy" "static-website-policy" {
  bucket = aws_s3_bucket.static-website.id
  policy = data.aws_iam_policy_document.s3_policy.json
}

output "website-bucket-name" {
  value = aws_s3_bucket.static-website.bucket
}