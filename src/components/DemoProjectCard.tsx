import { DemoProduct } from '@/types/vercel';
import Link from 'next/link';
import { FiExternalLink, FiCheck, FiTag } from 'react-icons/fi';

interface DemoProjectCardProps {
  product: DemoProduct;
}

export default function DemoProjectCard({ product }: DemoProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:border-blue-500/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/20">
      
      {/* Category Badge */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300 border border-blue-500/30">
        <FiTag className="w-3 h-3" />
        {product.category}
      </div>

      <div className="mb-6">
        {product.image ? (
          <div className="mb-6 h-48 w-full overflow-hidden rounded-xl bg-black/20">
            {/* Using standard img to avoid next/image domain configuration issues for dynamic domains */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={product.image} 
              alt={product.name} 
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="mb-6 h-48 w-full overflow-hidden rounded-xl bg-black/20 border border-white/5 relative group-hover:border-blue-500/50 transition-colors">
            {/* Auto screenshot fallback */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={`https://image.thum.io/get/width/1024/crop/768/noanimate/${product.url}`} 
              alt={`Anteprima di ${product.name}`} 
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
          </div>
        )}

        <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
        
        {/* Features List */}
        {product.features && product.features.length > 0 && (
          <ul className="mt-4 space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
        <div className="flex flex-col">
          <span className="text-xs text-gray-400 uppercase tracking-wider">A partire da</span>
          <span className="text-xl font-bold text-white">
            {product.price ? `€${product.price.toFixed(2)}` : 'Su preventivo'}
          </span>
        </div>
        
        <Link 
          href={product.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25"
        >
          Vedi Live
          <FiExternalLink />
        </Link>
      </div>
    </div>
  );
}
