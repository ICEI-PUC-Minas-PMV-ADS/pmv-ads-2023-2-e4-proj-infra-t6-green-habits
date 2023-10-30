export function removeAccentsAndSpaces(text: string | undefined): string {
    if (!text) {
      return '';
    }
  
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s/g, '');
  }
  