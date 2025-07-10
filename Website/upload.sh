#!/bin/bash

BUCKET_NAME="group3-cloud-bucket-d4e7a1f2"

if ! command -v aws &> /dev/null; then
  echo "❌ AWS CLI not found. Please install it first."
  exit 1
fi

echo "➡️ Uploading current directory to S3 bucket: s3://$BUCKET_NAME/"
echo "   (excluding .html and .sh files)"

aws s3 sync . s3://$BUCKET_NAME/ --exclude "*.html" --exclude "*.sh"
SYNC_STATUS=$?

if [ $SYNC_STATUS -eq 0 ]; then
  echo "✅ Upload complete (no HTML or shell script files were uploaded)."
else
  echo "❌ Upload failed with exit code $SYNC_STATUS."
  exit $SYNC_STATUS
fi
