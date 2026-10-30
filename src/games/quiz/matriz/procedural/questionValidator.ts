import { QuestionData } from '../questions/types';
import { ProceduralQuestion, ValidationResult } from './types';

export function validateQuestion(q: unknown): ValidationResult {
  if (!q || typeof q !== 'object') {
    return { valid: false, reason: 'Objeto de questão inválido ou nulo' };
  }

  const item = q as Partial<ProceduralQuestion>;

  if (typeof item.id !== 'string' || item.id.trim().length === 0) {
    return { valid: false, reason: 'ID de questão inválido ou vazio' };
  }

  if (typeof item.question !== 'string' || item.question.trim().length < 12) {
    return { valid: false, reason: 'Enunciado muito curto ou inexistente' };
  }

  if (!Array.isArray(item.options) || item.options.length !== 4) {
    return { valid: false, reason: 'Questão deve conter exatamente 4 alternativas' };
  }

  // Verificar se cada alternativa é não-vazia e distinta
  const normalizedOptions = new Set<string>();
  for (let i = 0; i < item.options.length; i++) {
    const opt = item.options[i];
    if (typeof opt !== 'string' || opt.trim().length === 0) {
      return { valid: false, reason: `Alternativa no índice ${i} está vazia` };
    }
    const norm = opt.trim().toLowerCase();
    if (normalizedOptions.has(norm)) {
      return { valid: false, reason: `Alternativa duplicada detectada: "${opt}"` };
    }
    normalizedOptions.add(norm);
  }

  if (
    typeof item.correctAnswer !== 'number' ||
    !Number.isInteger(item.correctAnswer) ||
    item.correctAnswer < 0 ||
    item.correctAnswer > 3
  ) {
    return { valid: false, reason: `Índice de resposta correta inválido: ${item.correctAnswer}` };
  }

  if (typeof item.explanation !== 'string' || item.explanation.trim().length < 12) {
    return { valid: false, reason: 'Explicação didática muito curta ou ausente' };
  }

  const expectedXp =
    item.difficulty === 'facil'
      ? 20
      : item.difficulty === 'medio'
      ? 35
      : item.difficulty === 'dificil'
      ? 55
      : 80;

  if (item.xp !== expectedXp) {
    return { valid: false, reason: `XP incorreto para dificuldade ${item.difficulty}: recebido ${item.xp}, esperado ${expectedXp}` };
  }

  if (item.isProcedural && (!item.signature || typeof item.signature !== 'string' || item.signature.trim().length === 0)) {
    return { valid: false, reason: 'Assinatura semântica procedural ausente ou vazia' };
  }

  // Verificação de balanceamento e ausência de viés de tamanho (Requisito 5)
  const correctOption = item.options[item.correctAnswer];
  const distractorOptions = item.options.filter((_, idx) => idx !== item.correctAnswer);
  const maxDistractorLen = Math.max(...distractorOptions.map((d) => d.length));
  const avgDistractorLen = distractorOptions.reduce((a, b) => a + b.length, 0) / 3;

  if (correctOption.length > maxDistractorLen + 25 && avgDistractorLen > 0 && correctOption.length / avgDistractorLen > 1.5) {
    return {
      valid: false,
      reason: `Alternativa correta desproporcionalmente maior que os distratores (${correctOption.length} vs média ${Math.round(avgDistractorLen)})`,
    };
  }

  return { valid: true };
}
