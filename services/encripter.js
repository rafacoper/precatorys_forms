import { hashSync, compareSync } from 'bcrypt';

const saltRounds = 10;

export async function encrypt(text) {
  return hashSync(text, saltRounds);
}

export async function compare(plainText, encryptedText) {
  return compareSync(plainText, encryptedText);
}
