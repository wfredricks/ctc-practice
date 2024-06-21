import React from 'react';

const Article2 = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>The Fascinating World of Bioluminescence</h1>
      <p style={styles.paragraph}>
        Bioluminescence is the production and emission of light by a living organism. It is a form of chemiluminescence, where light is produced by a chemical reaction. This intriguing phenomenon can be found in various species, including bacteria, fungi, marine vertebrates, and invertebrates, as well as some insects and terrestrial animals.
      </p>
      
      <h2 style={styles.heading}>The Chemistry Behind the Glow</h2>
      <p style={styles.paragraph}>
        The light emitted during bioluminescence is a result of a chemical reaction involving a light-emitting molecule called luciferin and an enzyme called luciferase. When luciferin reacts with oxygen, catalyzed by luciferase, it produces light. This reaction can vary slightly among different organisms, resulting in a spectrum of colors from blue and green to red.
      </p>
      
      <h2 style={styles.heading}>Bioluminescent Marine Life</h2>
      <p style={styles.paragraph}>
        The ocean is home to the majority of bioluminescent organisms. Many species of fish, jellyfish, and plankton use bioluminescence for various purposes, such as attracting mates, deterring predators, and luring prey. The deep sea, in particular, is a hotspot for bioluminescent creatures, where sunlight does not penetrate, and organisms rely on their own light sources.
      </p>
      
      <h2 style={styles.heading}>Fireflies: Nature’s Light Show</h2>
      <p style={styles.paragraph}>
        One of the most well-known examples of bioluminescence on land is the firefly. These insects produce a yellow, green, or pale red light from their lower abdomen. Fireflies use their bioluminescence primarily for mating signals, with each species having its own unique light pattern to attract potential mates.
      </p>
      
      <h2 style={styles.heading}>Bioluminescent Fungi</h2>
      <p style={styles.paragraph}>
        Bioluminescence is not limited to animals. Several species of fungi exhibit a glowing phenomenon, known as foxfire or fairy fire. These glowing mushrooms can often be found on decaying wood in forests. The bioluminescence in fungi is believed to attract insects, which help disperse the fungal spores.
      </p>
      
      <h2 style={styles.heading}>Applications of Bioluminescence</h2>
      <p style={styles.paragraph}>
        Beyond its natural occurrence, bioluminescence has practical applications in scientific research and biotechnology. It is used as a marker in molecular biology, where genes for luciferase can be attached to other genes of interest. When these genes are expressed in cells, the luciferase produces light, allowing researchers to track and study gene expression and cellular processes.
      </p>
      
      <h2 style={styles.heading}>Conclusion</h2>
      <p style={styles.paragraph}>
        Bioluminescence is a remarkable natural phenomenon that continues to captivate scientists and the general public alike. Whether lighting up the deep sea, forest floors, or summer nights, the glow of bioluminescent organisms serves as a reminder of the incredible diversity and complexity of life on Earth.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    lineHeight: 1.6,
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  heading: {
    color: '#555',
  },
  paragraph: {
    color: '#666',
    marginBottom: '20px',
  },
};

export default Article2;
