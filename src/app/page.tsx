import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Bot, ShieldCheck, Atom, Scaling } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  const features = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: 'Built for Modern Communities',
      description: 'Designed with the needs of modern Discord communities in mind, focusing on engagement and ease of use.',
    },
    {
      icon: <Atom className="h-8 w-8 text-primary" />,
      title: 'Clean, No-Spam Design',
      description: 'Our bots are built to be helpful, not noisy. Enjoy a clean, spam-free experience.',
    },
    {
      icon: <Scaling className="h-8 w-8 text-primary" />,
      title: 'Scalable & Custom Tools',
      description: 'From single-purpose bots to custom-built solutions, our tools are made to scale with your community.',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="max-w-xl text-center md:text-left">
              <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                PulseLabs — Bots & Digital Tools for Discord Communities
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Status bots, automation, and custom tools — built to scale
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
                  <Link href="/services">
                    View Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="transition-transform duration-300 hover:scale-105">
                  <Link href="https://discord.com/users/1399341822383489024" target="_blank">
                    Contact / Add Bot
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 w-full md:h-auto md:w-full md:aspect-video">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="rounded-lg object-cover shadow-lg"
                  data-ai-hint={heroImage.imageHint}
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">Why PulseLabs?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We focus on creating high-quality, reliable tools that enhance your community without getting in the way.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardContent className="flex flex-col items-center p-8 text-center md:items-start md:text-left">
                  {feature.icon}
                  <h3 className="mt-6 font-headline text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
             <Bot className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-4 font-headline text-3xl font-bold text-foreground md:text-4xl">Explore Our Suite of Tools</h2>
            <p className="mt-4 text-lg text-muted-foreground">
             PulseLabs offers a variety of bots and tools. Browse our services to find the perfect fit for your server.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
                <Link href="/services">
                  Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold">Ready to enhance your community?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">
            Get started with our powerful and user-friendly Discord bots today.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary" className="transition-transform duration-300 hover:scale-105">
              <Link href="/services">Get Started with PulseLabs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
