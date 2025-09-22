"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TeamMember {
  id: string
  nameEn: string
  namePl: string
  titleEn: string
  titlePl: string
  bio: string
  image: string
  order: number
}

const teamMembers = [
	{
		id: "1",
		nameEn: "Bernhard Zach",
		namePl: "Bernhard Zach",
		titleEn: "CEO and Director",
		titlePl: "CEO i Dyrektor",
		bio: "",
		image: "/teamMembers/Bernhard Zach.png",
		order: 1
	},
	{
		id: "2",
		nameEn: "Michał Krajka",
		namePl: "Michał Krajka",
		titleEn: "",
		titlePl: "",
		bio: "",
		image: "/teamMembers/Michał Krajka.png",
		order: 2
	},
	{
		id: "3",
		nameEn: "Marcin Jeszka",
		namePl: "Marcin Jeszka",
		titleEn: "",
		titlePl: "",
		bio: "",
		image: "/teamMembers/Marcin Jeszka.png",
		order: 3
	},
	{
		id: "4",
		nameEn: "Kamil Szelejewski",
		namePl: "Kamil Szelejewski",
		titleEn: "",
		titlePl: "",
		bio: "",
		image: "/teamMembers/Kamil Szelejewski.png",
		order: 4
	},
	{
		id: "5",
		nameEn: "Mariusz Szafrański",
		namePl: "Mariusz Szafrański",
		titleEn: "",
		titlePl: "",
		bio: "",
		image: "/teamMembers/Mariusz Szafrański.png",
		order: 5
	},
	{
		id: "6",
		nameEn: "Joanna Kavu",
		namePl: "Joanna Kavu",
		titleEn: "",
		titlePl: "",
		bio: "",
		image: "placeholderuser.jpg",
		order: 6
	},
	{
		id: "7",
		nameEn: "Leszek Szelejewski",
		namePl: "Leszek Szelejewski",
		titleEn: "",
		titlePl: "",
		bio: "",
		image: "/teamMembers/Leszek Szelejewski.png",
		order: 7
	},
	{
		id: "8",
		nameEn: "Krzysztof Stawniak",
		namePl: "Krzysztof Stawniak",
		titleEn: "",
		titlePl: "",
		bio: "",
		image: "/teamMembers/Krzysztof Stawniak.png",
		order: 8
	},
	{
		id: "9",
		nameEn: "Mariusz Bartoszczak",
		namePl: "Mariusz Bartoszczak",
		titleEn: "",
		titlePl: "",
		bio: "",
		image: "/teamMembers/Mariusz Bartoszczak.png",
		order: 9
	},
	{
		id: "10",
		nameEn: "Maksim Tatarenka",
		namePl: "Maksim Tatarenka",
		titleEn: "",
		titlePl: "",
		bio: "",
		image: "placeholderuser.jpg",
		order: 10
	}
];

export default function TeamPage() {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  const leadership = teamMembers.filter((member) => member.nameEn === "Bernhard Zach")
  const professionals = teamMembers.filter((member) => member.nameEn !== "Bernhard Zach")

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated professionals who make RTTechnik a leader in cleanroom solutions.
          </p>
        </div>

        {/* Leadership Section */}
        {leadership.length > 0 && (
          <div className="mb-24">
            <h2 className="relative pb-4 text-3xl font-bold text-center mb-12 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-1 after:w-24 after:bg-amber-400 after:rounded-full">Leadership</h2>
            <div className="flex justify-center">
              {leadership.map((member) => (
                <Card
                  key={member.id}
                  className="overflow-hidden shadow-2xl rounded-2xl w-full max-w-5xl bg-gradient-to-br from-slate-50 to-slate-200 dark:from-gray-900 dark:to-black border-2 border-amber-400 dark:border-amber-500"
                >
                  <div className="md:grid md:grid-cols-12">
                    <div className="md:col-span-4">
                      <div className="relative h-80 md:h-full w-full">
                        <Image
                          src={member.image || "/placeholder-user.svg"}
                          alt={member.nameEn}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-8 p-10 md:p-16 flex flex-col justify-center">
                      <h3 className="text-3xl lg:text-4xl font-bold mb-2 text-gray-900 dark:text-white">{member.nameEn}</h3>
                      <p className="text-amber-600 dark:text-amber-400 text-xl lg:text-2xl font-semibold mb-6 tracking-wide">{member.titleEn}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        {member.bio || "With over two decades of industry experience, Bernhard Zach leads RTTechnik with a vision for innovation and excellence. His leadership is key to our success in delivering state-of-the-art cleanroom solutions."}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Professionals Section */}
        {professionals.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Our Dedicated Professionals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {professionals.map((member) => (
                <Card key={member.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-[30rem] w-full">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.nameEn}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold mb-2">{member.nameEn}</h3>
                      <p className="text-primary font-medium mb-3">{member.titleEn}</p>
                      <p className="text-gray-600">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
