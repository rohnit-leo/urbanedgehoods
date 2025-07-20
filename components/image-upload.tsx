"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createClient } from "@/lib/supabase"
import { Upload, X, ImageIcon } from "lucide-react"
import Image from "next/image"

interface ImageUploadProps {
  bucket: string
  onUpload: (url: string) => void
  maxFiles?: number
  existingImages?: string[]
}

export default function ImageUpload({ bucket, onUpload, maxFiles = 5, existingImages = [] }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [images, setImages] = useState<string[]>(existingImages)

  const supabase = createClient()

  const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.")
      }

      const file = event.target.files[0]
      const fileExt = file.name.split(".").pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      const { error: uploadError } = await supabase.storage.from(bucket).upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      const { data } = supabase.storage.from(bucket).getPublicUrl(filePath)

      const imageUrl = data.publicUrl
      setImages([...images, imageUrl])
      onUpload(imageUrl)
    } catch (error) {
      alert("Error uploading image!")
      console.log(error)
    } finally {
      setUploading(false)
    }
  }

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index)
    setImages(newImages)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Label htmlFor="image-upload" className="text-white">
          Upload Images ({images.length}/{maxFiles})
        </Label>
        <Button
          type="button"
          disabled={uploading || images.length >= maxFiles}
          className="bg-amber-500 hover:bg-amber-400 text-black"
          onClick={() => document.getElementById("image-upload")?.click()}
        >
          {uploading ? (
            "Uploading..."
          ) : (
            <>
              <Upload className="h-4 w-4 mr-2" />
              Upload Image
            </>
          )}
        </Button>
      </div>

      <Input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={uploadImage}
        disabled={uploading || images.length >= maxFiles}
        className="hidden"
      />

      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((url, index) => (
            <div key={index} className="relative group">
              <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden">
                <Image
                  src={url || "/placeholder.svg"}
                  alt={`Upload ${index + 1}`}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <Button
                type="button"
                size="sm"
                variant="destructive"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => removeImage(index)}
              >
                <X className="h-3 w-3" />
              </Button>
              {index === 0 && (
                <div className="absolute bottom-2 left-2 bg-amber-500 text-black text-xs px-2 py-1 rounded">
                  Primary
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {images.length === 0 && (
        <div className="border-2 border-dashed border-zinc-700 rounded-lg p-8 text-center">
          <ImageIcon className="h-12 w-12 text-zinc-500 mx-auto mb-4" />
          <p className="text-zinc-400">No images uploaded yet</p>
          <p className="text-zinc-500 text-sm">Click upload to add product images</p>
        </div>
      )}
    </div>
  )
}
