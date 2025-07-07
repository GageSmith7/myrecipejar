import React from 'react';

export default function RecipeCard({ recipe, onSelect }) {
    return (
        <div
          onClick={() => onSelect(recipe)}
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            borderRadius: '16px',
            padding: '0',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            overflow: 'hidden',
            position: 'relative',
            height: '280px',
            display: 'flex',
            flexDirection: 'column'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
          }}
        >
          {/* Top decorative section */}
          <div style={{
            height: '80px',
            background: `linear-gradient(135deg, 
              ${getRandomGradient(recipe.title)} 0%, 
              ${getRandomGradient(recipe.title, true)} 100%)`,
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Background decoration */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '60px',
              height: '60px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-15px',
              left: '-15px',
              width: '40px',
              height: '40px',
              background: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '50%'
            }} />
            
            {/* Recipe emoji/icon */}
            <div style={{
              position: 'absolute',
              bottom: '-15px',
              right: '20px',
              width: '50px',
              height: '50px',
              background: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}>
              {getRecipeEmoji(recipe.title)}
            </div>
          </div>
          
          {/* Content section */}
          <div style={{ 
            padding: '25px 20px 20px 20px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            {/* Recipe Title and Category */}
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '12px',
                gap: '12px'
              }}>
                <h3 style={{ 
                  margin: 0, 
                  color: '#1a202c',
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  lineHeight: '1.3',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  flex: 1
                }}>
                  {recipe.title}
                </h3>
                
                {/* Category and Privacy Badges */}
                <div style={{
                  display: 'flex',
                  gap: '6px',
                  alignItems: 'center'
                }}>
                  {/* Privacy Badge */}
                  <div style={{
                    padding: '4px 8px',
                    background: recipe.visibility === 'public' 
                      ? 'linear-gradient(135deg, #10b98120, #059f3e20)'
                      : 'linear-gradient(135deg, #64748b20, #47556920)',
                    borderRadius: '20px',
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    color: recipe.visibility === 'public' ? '#059669' : '#64748b',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '3px',
                    border: `1px solid ${recipe.visibility === 'public' ? '#10b98130' : '#64748b30'}`
                  }}>
                    <span style={{ fontSize: '8px' }}>
                      {recipe.visibility === 'public' ? '🌍' : '🔒'}
                    </span>
                    {recipe.visibility === 'public' ? 'Public' : 'Private'}
                  </div>
                  
                  {/* Category Badge */}
                  <div style={{
                    padding: '4px 10px',
                    background: `linear-gradient(135deg, ${getRandomGradient(recipe.title)}20, ${getRandomGradient(recipe.title, true)}20)`,
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: getRandomGradient(recipe.title),
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    border: `1px solid ${getRandomGradient(recipe.title)}30`
                  }}>
                    <span style={{ fontSize: '10px' }}>{getCategoryEmoji(recipe.category)}</span>
                    {getCategoryLabel(recipe.category)}
                  </div>
                </div>
              </div>
              
              {/* Instructions Preview */}
              {recipe.instructions && (
                <p style={{ 
                  margin: '0 0 16px 0', 
                  color: '#64748b', 
                  fontSize: '0.9rem',
                  lineHeight: '1.5',
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  height: '2.7rem'
                }}>
                  {recipe.instructions.length > 100 
                    ? `${recipe.instructions.substring(0, 100)}...` 
                    : recipe.instructions
                  }
                </p>
              )}
            </div>
            
            {/* Bottom info section */}
            <div>
              {/* Recipe Stats */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '12px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'linear-gradient(135deg, #667eea15, #764ba215)',
                  padding: '6px 12px',
                  borderRadius: '8px'
                }}>
                  <span style={{ fontSize: '14px' }}>🥘</span>
                  <span style={{ 
                    color: '#667eea', 
                    fontSize: '0.85rem',
                    fontWeight: '600'
                  }}>
                    {recipe.ingredients?.length || 0} ingredients
                  </span>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <span style={{ fontSize: '12px', opacity: 0.6 }}>📅</span>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    color: '#94a3b8',
                    fontWeight: '500'
                  }}>
                    {recipe.createdAt?.toDate?.()?.toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    }) || 'Recent'}
                  </span>
                </div>
              </div>
              
              {/* Click hint with arrow */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '8px',
                borderRadius: '8px',
                background: 'rgba(102, 126, 234, 0.05)',
                transition: 'all 0.2s ease'
              }}>
                <span style={{
                  fontSize: '0.8rem',
                  color: '#667eea',
                  fontWeight: '500'
                }}>
                  View Recipe
                </span>
                <span style={{
                  fontSize: '12px',
                  color: '#667eea'
                }}>
                  →
                </span>
              </div>
            </div>
          </div>
        </div>
      );
}

// Helper function to generate consistent colors based on recipe title
function getRandomGradient(title, secondary = false) {
  const gradients = [
    '#667eea', // Soft blue
    '#764ba2', // Soft purple
    '#f093fb', // Soft pink
    '#8b5fbf', // Muted purple
    '#6c5ce7', // Soft violet
    '#a29bfe', // Light purple
    '#fd79a8', // Soft rose
    '#e84393', // Muted pink
    '#74b9ff', // Soft sky blue
    '#0984e3', // Professional blue
    '#00b894', // Soft teal
    '#00cec9', // Muted turquoise
    '#fdcb6e', // Soft orange
    '#e17055'  // Muted coral
  ];
  
  // Use title to generate a consistent index
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    const char = title.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  const index = Math.abs(hash) % gradients.length;
  return secondary ? gradients[(index + 1) % gradients.length] : gradients[index];
}

// Helper function to get category emoji
function getCategoryEmoji(category) {
  const categoryMap = {
    breakfast: '🌅',
    lunch: '🥙', 
    dinner: '🍽️',
    snack: '🍿',
    dessert: '🍰'
  };
  return categoryMap[category] || '🍽️';
}

// Helper function to get category label
function getCategoryLabel(category) {
  const labelMap = {
    breakfast: 'Breakfast',
    lunch: 'Lunch',
    dinner: 'Dinner', 
    snack: 'Snack',
    dessert: 'Dessert'
  };
  return labelMap[category] || 'Dinner';
}

// Helper function to get appropriate emoji based on recipe title
function getRecipeEmoji(title) {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('cake') || titleLower.includes('dessert') || titleLower.includes('sweet')) {
    return '🍰';
  } else if (titleLower.includes('pasta') || titleLower.includes('spaghetti')) {
    return '🍝';
  } else if (titleLower.includes('pizza')) {
    return '🍕';
  } else if (titleLower.includes('burger') || titleLower.includes('sandwich')) {
    return '🍔';
  } else if (titleLower.includes('salad')) {
    return '🥗';
  } else if (titleLower.includes('soup')) {
    return '🍲';
  } else if (titleLower.includes('bread')) {
    return '🍞';
  } else if (titleLower.includes('fish') || titleLower.includes('salmon')) {
    return '🐟';
  } else if (titleLower.includes('chicken') || titleLower.includes('meat')) {
    return '🍗';
  } else if (titleLower.includes('drink') || titleLower.includes('smoothie')) {
    return '🥤';
  } else if (titleLower.includes('breakfast')) {
    return '🍳';
  } else {
    return '🍽️';
  }
}