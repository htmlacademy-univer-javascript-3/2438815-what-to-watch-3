import {Films} from '../types/film-type.ts';
import {ratings} from '../consts/ratings';

export const films : Films =
  [
    {
      id: 1,
      title: 'Le Fabuleux Destin d\'Amélie Poulain',
      genre: ['Romance', 'Comedy'],
      releaseYear: 2001,
      video: {
        src: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
        posterPath: 'img/amelie.jpg',
      },
      rating: { score: 8.3, level: ratings.Eight, count: 784000 },
      description: 'Despite being caught in her imaginative world, Amelie, a young waitress, decides to help people find happiness. Her quest to spread joy leads her on a journey where she finds true love.',
      director: 'Jean-Pierre Jeunet',
      starring: ['Audrey Tautou', 'Mathieu Kassovitz'],
      runTime: '2h 02m',
      poster: {src: 'img/the-grand-budapest-hotel-poster.jpg', alt: 'The Grand Budapest Hotel poster'},
      bg: {src: 'img/bg-the-grand-budapest-hotel.jpg', alt: 'The Grand Budapest Hotel'},
    },
    {
      id: 2,
      title: 'La La Land',
      genre: ['Comedy', 'Drama'],
      releaseYear: 2016,
      video: {
        src: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
        posterPath: 'img/lalaland.jpg',
      },
      rating: { score: 8.0, level: ratings.Eight, count: 533000},
      description: 'In the heart of Los Angeles, aspiring actress Mia and jazz pianist Sebastian fall in love while pursuing their dreams. Their passionate relationship is put to the test as they face the challenges of fame and success.',
      director: 'Damien Chazelle',
      starring: ['Ryan Gosling', 'Emma Stone'],
      runTime: '2h 08m',
      poster: {src: 'img/the-grand-budapest-hotel-poster.jpg', alt: 'The Grand Budapest Hotel poster'},
      bg: {src: 'img/bg-the-grand-budapest-hotel.jpg', alt: 'The Grand Budapest Hotel'},
    },
    {
      id: 3,
      title: 'Pulp Fiction',
      genre: ['Crime', 'Drama'],
      releaseYear: 1994,
      video: {
        src: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
        posterPath: 'img/pulp-fiction.jpg',
      },
      description: 'Pulp Fiction is a cult classic that intertwines several interconnected stories of crime in Los Angeles. The film follows hitmen, a boxer, a mob boss, and other colorful characters in their misadventures filled with violence, dark humor, and unexpected twists.',
      director: 'Quentin Tarantino',
      starring: ['John Travolta', 'Samuel L. Jackson'],
      runTime: '2h 34m',
      rating: { score: 8.9, level: ratings.Eight, count: 1935000 },
      poster: {src: 'img/the-grand-budapest-hotel-poster.jpg', alt: 'The Grand Budapest Hotel poster'},
      bg: {src: 'img/bg-the-grand-budapest-hotel.jpg', alt: 'The Grand Budapest Hotel'},
    },
    {
      id: 4,
      title: 'The Lion King',
      genre: ['Drama', 'Comedy', 'KidsAndFamily'],
      releaseYear: 1994,
      video: {
        src: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
        posterPath: 'img/lion-king.jpg',
      },
      description: 'The Lion King tells the story of Simba, a young lion who must reclaim his throne from his evil uncle Scar. With the help of his friends Timon and Pumbaa, Simba embarks on an epic journey of self-discovery and learns valuable life lessons along the way.',
      director: 'Roger Allers, Rob Minkoff',
      starring: ['Matthew Broderick', 'Jeremy Irons'],
      runTime: '1h 28m',
      rating: { score: 8.5, level: ratings.Eight, count: 972000 },
      poster: {src: 'img/the-grand-budapest-hotel-poster.jpg', alt: 'The Grand Budapest Hotel poster'},
      bg: {src: 'img/bg-the-grand-budapest-hotel.jpg', alt: 'The Grand Budapest Hotel'},
    },
    {
      id: 5,
      title: 'Exit Through the Gift Shop',
      genre: ['Documentary', 'Comedy'],
      releaseYear: 2010,
      video: {
        src: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
        posterPath: 'img/exit-through-the-gift-shop.jpg',
      },
      description: 'Exit Through the Gift Shop is a thought-provoking documentary film released in 2010. Directed by renowned street artist Banksy, the film explores the world of street art and its commercialization. It follows the journey of a man named Thierry Guetta, who starts as a filmmaker documenting street artists but eventually becomes an artist himself under the name Mr. Brainwash. With a runtime of 1 hour and 27 minutes, this documentary offers a unique perspective on art and its societal impact.',
      director: 'Banksy',
      starring: ['Banksy', 'Mr. Brainwash'],
      runTime: '1h 27m',
      rating: {score: 8.3, level: 'Eight', count: 784000},
      poster: {src: 'img/the-grand-budapest-hotel-poster.jpg', alt: 'The Grand Budapest Hotel poster'},
      bg: {src: 'img/bg-the-grand-budapest-hotel.jpg', alt: 'The Grand Budapest Hotel'},
    },
    {
      id: 6,
      title: 'The Matrix',
      genre: ['Drama', 'SciFi'],
      releaseYear: 1999,
      video: {
        src: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
        posterPath: 'img/matrix.jpg',
      },
      description: 'In a dystopian future, Thomas Anderson, a computer programmer, discovers that the world he believes in is a simulated reality known as the Matrix. As he joins a group of rebels battling against machine overlords, he learns his true destiny and becomes the legendary hacker Neo.',
      director: 'The Wachowskis',
      starring: ['Keanu Reeves', 'Carrie-Anne Moss'],
      runTime: '2h 16m',
      rating: { score: 8.7, level: 'Eight', count: 611000 },
      poster: {src: 'img/the-grand-budapest-hotel-poster.jpg', alt: 'The Grand Budapest Hotel poster'},
      bg: {src: 'img/bg-the-grand-budapest-hotel.jpg', alt: 'The Grand Budapest Hotel'},
    },
    {
      id: 7,
      title: 'It',
      genre: ['Horror'],
      releaseYear: 2017,
      video: {
        src: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
        posterPath: 'img/it.jpg',
      },
      description: 'When children in the town of Derry start disappearing, a group of young outcasts confront their biggest fears when they square off against an evil clown named Pennywise, whose history of murder and violence spans centuries.',
      director: 'Andrés Muschietti',
      starring: ['Bill Skarsgård', 'Jaeden Martell'],
      runTime: '2h 15m',
      rating: { score: 7.3, level: 'Seven', count: 440000 },
      poster: {src: 'img/the-grand-budapest-hotel-poster.jpg', alt: 'The Grand Budapest Hotel poster'},
      bg: {src: 'img/bg-the-grand-budapest-hotel.jpg', alt: 'The Grand Budapest Hotel'},
    },
    {
      id: 8,
      title: 'L\'appartement',
      genre: ['Drama', 'Romance', 'Thriller'],
      releaseYear: 1996,
      video: {
        src: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
        posterPath: 'img/lappartment.jpg',
      },
      description: 'L\'appartement is a captivating drama and romance film released in 1996. The story revolves around a man named Maxime who becomes obsessed with finding a woman he met at a party. As the mystery unfolds, secrets about love, desire, and betrayal are revealed.',
      director: 'Gilles Mimouni',
      starring: ['Vincent Cassel', 'Monica Bellucci'],
      runTime: '1h 56m',
      rating: { score: 8.3, level: 'Eight', count: 784000 },
      poster: {src: 'img/the-grand-budapest-hotel-poster.jpg', alt: 'The Grand Budapest Hotel poster'},
      bg: {src: 'img/bg-the-grand-budapest-hotel.jpg', alt: 'The Grand Budapest Hotel'},
    },
  ];
