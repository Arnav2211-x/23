"use client"

import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Download, ExternalLink, BookOpen, Video, FileText, Users } from "lucide-react"

export default function ResourcesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = [
    { id: "all", label: "All Resources", icon: BookOpen },
    { id: "guides", label: "Guides", icon: FileText },
    { id: "workshops", label: "Workshops", icon: Users },
    { id: "videos", label: "Videos", icon: Video },
    { id: "tools", label: "Tools", icon: Download },
  ]

  const resources = [
    {
      id: 1,
      title: "Conflict Resolution Handbook",
      description:
        "A comprehensive guide to understanding and resolving conflicts in personal and professional settings.",
      category: "guides",
      type: "PDF Guide",
      duration: "45 min read",
      level: "Beginner",
      downloads: 2340,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Building Empathy Workshop",
      description: "Interactive workshop materials for developing empathy skills in groups and communities.",
      category: "workshops",
      type: "Workshop Kit",
      duration: "2 hours",
      level: "Intermediate",
      downloads: 1567,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Peace Communication Techniques",
      description: "Video series teaching non-violent communication and active listening skills.",
      category: "videos",
      type: "Video Series",
      duration: "3.5 hours",
      level: "All Levels",
      downloads: 3421,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Community Dialogue Toolkit",
      description: "Practical tools and templates for organizing community dialogue sessions and peace circles.",
      category: "tools",
      type: "Toolkit",
      duration: "Self-paced",
      level: "Advanced",
      downloads: 987,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Youth Peace Education Curriculum",
      description: "Complete curriculum for teaching peace education to young people aged 12-18.",
      category: "guides",
      type: "Curriculum",
      duration: "12 weeks",
      level: "Educator",
      downloads: 1876,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Trauma-Informed Peace Building",
      description: "Workshop on understanding trauma's impact on communities and healing-centered approaches.",
      category: "workshops",
      type: "Workshop",
      duration: "4 hours",
      level: "Advanced",
      downloads: 1234,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const filteredResources =
    selectedCategory === "all" ? resources : resources.filter((resource) => resource.category === selectedCategory)

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      case "Educator":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            className={`font-montserrat font-black text-4xl md:text-6xl mb-6 glow-text transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Peace Resources
          </h1>
          <p
            className={`font-open-sans text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Access our comprehensive library of tools, guides, and educational materials designed to help you build
            peace in your community and beyond.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="font-open-sans glow-hover transition-all duration-300"
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.label}
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <Card
                key={resource.id}
                className="hover:shadow-xl transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className={`absolute top-3 right-3 ${getLevelColor(resource.level)}`}>{resource.level}</Badge>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {resource.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{resource.duration}</span>
                  </div>
                  <CardTitle className="font-montserrat font-bold text-lg glow-hover">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="font-open-sans text-muted-foreground text-sm leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button
                        size="sm"
                        className="font-open-sans glow-hover hover:scale-105 transition-all duration-300"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="font-open-sans glow-hover hover:scale-105 transition-all duration-300 bg-transparent"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">
                    {resource.downloads.toLocaleString()} downloads
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-6 glow-text">Featured Collections</h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              Curated resource collections for specific peace-building scenarios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="font-montserrat font-bold text-xl mb-3 glow-hover">Educator's Peace Kit</h3>
                <p className="font-open-sans text-muted-foreground mb-4 leading-relaxed">
                  Complete collection of lesson plans, activities, and assessment tools for teaching peace education in
                  schools and community centers.
                </p>
                <div className="flex items-center justify-between">
                  <Badge className="bg-primary/10 text-primary">12 Resources</Badge>
                  <Button className="glow-hover hover:scale-105 transition-all duration-300">
                    <Download className="w-4 h-4 mr-2" />
                    Download Kit
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="font-montserrat font-bold text-xl mb-3 glow-hover">Community Leader's Toolkit</h3>
                <p className="font-open-sans text-muted-foreground mb-4 leading-relaxed">
                  Essential resources for community leaders organizing peace initiatives, including planning templates
                  and facilitation guides.
                </p>
                <div className="flex items-center justify-between">
                  <Badge className="bg-primary/10 text-primary">8 Resources</Badge>
                  <Button className="glow-hover hover:scale-105 transition-all duration-300">
                    <Download className="w-4 h-4 mr-2" />
                    Download Kit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contribute CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-6 glow-text">Contribute Resources</h2>
          <p className="font-open-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Have valuable peace-building resources to share? Help grow our library and support peace advocates
            worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="font-montserrat font-bold text-lg px-8 py-4 glow-hover hover:scale-105 transition-all duration-300"
            >
              <Link href="/contact">Submit Resource</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-montserrat font-bold text-lg px-8 py-4 glow-hover hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
