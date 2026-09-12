'use client';

import { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const MOODS = ['All', 'Moody + blue', 'Warm + earthbound', 'Quiet + minimal'];

export default function ProductGrid() {
    const [activeMood, setActiveMood] = useState('All');

    const filtered =
        activeMood === 'All'
            ? products
            : products.filter((p) => p.mood.toLowerCase() === activeMood.toLowerCase());

    return (
        <section id="shop">
            <div className="wrap">
                <div className="mood-strip">
                    <h2>New arrivals</h2>
                    <div className="moods">
                        {MOODS.map((mood) => (
                            <button
                                key={mood}
                                type="button"
                                className={`mood-pill ${activeMood === mood ? 'active' : ''}`}
                                onClick={() => setActiveMood(mood)}
                            >
                                {mood}
                            </button>
                        ))}
                    </div>
                </div>

                {filtered.length > 0 ? (
                    <div className="grid">
                        {filtered.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                ) : (
                    <p style={{ color: '#7a7a70', fontSize: 14 }}>No pieces in this mood right now.</p>
                )}
            </div>
        </section>
    );
}
