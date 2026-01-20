import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          PulseLabs Services
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Browse our collection of Discord bots and digital tools designed to empower your community.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {services.map((service) => (
          <Card key={service.slug} className="flex flex-col transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline">{service.name}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow" />
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={service.link} target={service.link.startsWith('http') ? '_blank' : '_self'}>
                  {service.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
