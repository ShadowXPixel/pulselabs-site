import { productDetails } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailPage() {
  const product = productDetails['mc-status-bot'];

  if (!product) {
    return <div>Product not found.</div>;
  }

  const renderPricingCard = (tier: 'free' | 'premium') => {
    const tierData = product.pricing[tier];
    return (
      <Card className="flex flex-col transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline">{tierData.name}</CardTitle>
          <CardDescription>
            {tier === 'free' ? 'For testing out our product , or basic needs.' : 'For automated and advanced server management.'}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-3">
            {tierData.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full" variant={tier === 'premium' ? 'default' : 'outline'}>
            <Link href={product.contactLink} target="_blank">{tierData.cta}</Link>
          </Button>
        </CardFooter>
      </Card>
    );
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 sm:py-16 md:py-20">
      <div className="text-center">
        <p className="font-semibold text-primary">PulseLabs Product</p>
        <h1 className="mt-2 font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {product.name}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          {product.description}
        </p>
      </div>

      <div className="my-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-headline text-3xl font-bold">Features</h2>
          <Card>
            <CardContent className="p-8">
              <ul className="space-y-4">
                {product.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="mr-4 mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="mb-8 text-center font-headline text-3xl font-bold">Pricing</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {renderPricingCard('free')}
          {renderPricingCard('premium')}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          {product.setupNote}
        </p>
      </div>
    </div>
  );
}
