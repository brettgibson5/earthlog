import { Injectable } from '@nestjs/common';

@Injectable()
export class CreaturesService {
  public creatures = [
    {
      name: 'Gray Wolf',
      description:
        'The Gray Wolf is a large, wild dog that lives in packs. They have thick fur, sharp teeth, and are excellent hunters. Gray Wolves are social animals and communicate with howls.',
      type: 'Carnivore',
    },
    {
      name: 'American Black Bear',
      description:
        'The American Black Bear is a big, strong mammal with black fur. They are omnivores, which means they eat both plants and animals. Black bears like to climb trees and are good swimmers.',
      type: 'Omnivore',
    },
    {
      name: 'White-tailed Deer',
      description:
        'The White-tailed Deer is a graceful mammal with a reddish-brown coat and a white tail that they raise when alarmed. They eat plants and can run fast to escape predators. Male deer have antlers that they shed and regrow every year.',
      type: 'Herbivore',
    },
    {
      name: 'Raccoon',
      description:
        'The Raccoon is a furry mammal with a mask-like pattern around its eyes. They have clever paws and are good at climbing trees. Raccoons are omnivores and eat a variety of foods, including fruits, nuts, and small animals.',
      type: 'Omnivore',
    },
    {
      name: 'North American River Otter',
      description:
        'The North American River Otter is a playful mammal that loves to swim and slide on its belly. They have sleek fur that keeps them warm in water. Otters eat fish and can hold their breath underwater for a long time.',
      type: 'Carnivore',
    },
  ];
}
