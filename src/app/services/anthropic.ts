import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { AiMessage } from '../core/models/ai-insight';

@Injectable({ providedIn: 'root' })
export class AnthropicService {
  private readonly API = 'https://api.anthropic.com/v1/messages';

  constructor(private http: HttpClient) {}

  ask(messages: AiMessage[], systemPrompt: string): Observable<string> {
    return this.http.post<any>(this.API, {
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system: systemPrompt,
      messages
    }).pipe(
      map(res => res.content?.find((b: any) => b.type === 'text')?.text ?? 'No response.')
    );
  }
}