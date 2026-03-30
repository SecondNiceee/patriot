#!/usr/bin/env python3
import os
import requests
import json
from typing import Dict, Any

# Get credentials from environment
PROJECT_ID = os.getenv("SANITY_PROJECT_ID", "p60b3z1u")
DATASET = os.getenv("SANITY_DATASET", "production")
API_TOKEN = os.getenv("SANITY_API_TOKEN")

if not API_TOKEN:
    print("❌ SANITY_API_TOKEN not set")
    exit(1)

BASE_URL = f"https://{PROJECT_ID}.api.sanity.io/v2021-06-07"
HEADERS = {
    "Authorization": f"Bearer {API_TOKEN}",
    "Content-Type": "application/json",
}

def upsert_document(doc_id: str, doc_type: str, data: Dict[str, Any]) -> bool:
    """Create or update a document in Sanity"""
    url = f"{BASE_URL}/datasets/{DATASET}/documents/{doc_id}"
    doc = {
        "_id": doc_id,
        "_type": doc_type,
        **data
    }
    
    try:
        response = requests.patch(url, headers=HEADERS, json=doc)
        if response.status_code in [200, 201]:
            print(f"✅ {doc_id}")
            return True
        else:
            print(f"❌ {doc_id}: {response.status_code} - {response.text}")
            return False
    except Exception as e:
        print(f"❌ {doc_id}: {str(e)}")
        return False

def main():
    print("🌱 Seeding Sanity content...\n")
    
    # Services
    print("Services:")
    upsert_document("services", "services", {
        "title": "Наши услуги",
        "description": "Полный спектр услуг по оформлению водительских прав",
        "items": [
            {
                "title": "Права категории B",
                "description": "Самая популярная категория для легковых автомобилей. Быстрое оформление, гарантия законности",
                "price": "65 000 руб.",
                "duration": "3-7 дней",
                "tags": ["Категория: B"],
            },
            {
                "title": "Права категории A",
                "description": "Права на мотоциклы и мопеды. Быстрое оформление без экзаменов",
                "price": "55 000 руб.",
                "duration": "3-5 дней",
                "tags": ["Категория: A, A1"],
            },
            {
                "title": "Права категории C",
                "description": "Права на грузовые автомобили до 7,5 тонн",
                "price": "75 000 руб.",
                "duration": "5-10 дней",
                "tags": ["Категория: C, C1"],
            },
            {
                "title": "Права категории D",
                "description": "Права на пассажирский транспорт и автобусы",
                "price": "85 000 руб.",
                "duration": "7-14 дней",
                "tags": ["Категория: D, D1"],
            },
            {
                "title": "Помощь в восстановлении после лишения",
                "description": "Комплексное сопровождение при возврате водительских прав после лишения",
                "price": "50 000 руб.",
                "duration": "7-14 дней",
                "tags": ["Юридическая помощь"],
            },
            {
                "title": "Свидетельство об окончании автошколы",
                "description": "Получение свидетельства об окончании автошколы в кратчайшие сроки",
                "price": "35 000 руб.",
                "duration": "1-3 дня",
                "tags": ["Официальный документ"],
            },
        ]
    })
    
    # Features
    print("\nFeatures:")
    upsert_document("features", "features", {
        "title": "Почему выбирают нас",
        "description": "Основные преимущества нашего сервиса",
        "items": [
            {
                "icon": "Car",
                "title": "Полное сопровождение",
                "description": "Ведём вас от первой консультации до момента получения удостоверения в руки",
                "stat": "100%",
                "statLabel": "поддержка",
            },
            {
                "icon": "Zap",
                "title": "Быстрые сроки",
                "description": "Оптимизированный процесс позволяет получить права в кратчайшие сроки",
                "stat": "14",
                "statLabel": "дней",
            },
            {
                "icon": "FileCheck",
                "title": "Юридическая чистота",
                "description": "Все документы оформляются официально с соблюдением законодательства",
                "stat": "100%",
                "statLabel": "легально",
            },
            {
                "icon": "Shield",
                "title": "Гарантия результата",
                "description": "Гарантируем получение водительского удостоверения или возврат средств",
                "stat": "5 лет",
                "statLabel": "гарантия",
            },
            {
                "icon": "Clock",
                "title": "Поддержка 24/7",
                "description": "Наши специалисты всегда на связи и готовы ответить на ваши вопросы",
                "stat": "24/7",
                "statLabel": "онлайн",
            },
            {
                "icon": "Users",
                "title": "Индивидуальный подход",
                "description": "Учитываем особенности каждого клиента и подбираем оптимальное решение",
                "stat": "2500+",
                "statLabel": "клиентов",
            },
        ]
    })
    
    # Process
    print("\nProcess:")
    upsert_document("process", "process", {
        "title": "Как мы работаем",
        "description": "Простой и прозрачный процесс получения водительских прав",
        "steps": [
            {
                "step": 1,
                "title": "Оставьте заявку на получение прав",
                "description": "Свяжитесь с нами через форму на сайте, WhatsApp, Telegram или позвоните напрямую",
            },
            {
                "step": 2,
                "title": "Бесплатная консультация",
                "description": "Наш специалист проконсультирует вас и подберёт оптимальное решение",
            },
            {
                "step": 3,
                "title": "Оформление документов",
                "description": "Собираем и оформляем все необходимые документы",
            },
            {
                "step": 4,
                "title": "Обучение и подготовка",
                "description": "Проводим обучение по теории и практике вождения",
            },
            {
                "step": 5,
                "title": "Сдача экзаменов",
                "description": "Сопровождаем вас на экзаменах в ГИБДД",
            },
            {
                "step": 6,
                "title": "Получение водительского удостоверения",
                "description": "Вы получаете водительские права и можете законно управлять автомобилем",
            },
        ]
    })
    
    # Guarantees
    print("\nGuarantees:")
    upsert_document("guarantees", "guarantees", {
        "title": "Наши гарантии",
        "description": "Мы гарантируем качество и законность всех наших услуг",
        "items": [
            {
                "icon": "FileCheck",
                "title": "Официальное оформление",
                "description": "100% официальное оформление всех документов",
            },
            {
                "icon": "Banknote",
                "title": "Возврат средств",
                "description": "Возврат средств, если не получите права",
            },
            {
                "icon": "Lock",
                "title": "Конфиденциальность",
                "description": "Конфиденциальность ваших данных",
            },
            {
                "icon": "Award",
                "title": "Прозрачные цены",
                "description": "Прозрачное ценообразование без скрытых платежей",
            },
            {
                "icon": "Shield",
                "title": "Юридическое сопровождение",
                "description": "Юридическое сопровождение на всех этапах",
            },
            {
                "icon": "Headphones",
                "title": "Поддержка после получения",
                "description": "Поддержка после получения прав",
            },
        ]
    })
    
    # FAQ
    print("\nFAQ:")
    upsert_document("faq", "faq", {
        "title": "Часто задаваемые вопросы",
        "description": "Ответы на самые популярные вопросы наших клиентов",
        "items": [
            {
                "question": "Сколько времени занимает получение водительских прав?",
                "answer": "В среднем процесс оформления прав занимает от 2 до 4 недель в зависимости от выбранной программы",
            },
            {
                "question": "Какие документы нужны чтобы заказать права?",
                "answer": "Базово требуется паспорт гражданина РФ и медицинская справка. Все остальные документы мы поможем собрать",
            },
            {
                "question": "Что входит в стоимость оформления прав?",
                "answer": "В стоимость входит: теоретическое обучение, практические занятия, учебные материалы, сопровождение на экзаменах",
            },
            {
                "question": "Можно ли получить права без посещения автошколы?",
                "answer": "Да, мы предлагаем программы с минимальным посещением. Гибкий график позволяет совмещать оформление с работой",
            },
            {
                "question": "Что делать, если не получилось сдать экзамен?",
                "answer": "Мы предоставляем дополнительные занятия для подготовки к пересдаче и сопровождаем вас до успеха",
            },
            {
                "question": "Есть ли рассрочка на оформление прав?",
                "answer": "Да, мы предлагаем удобную рассрочку без процентов. Детали можно уточнить при консультации",
            },
        ]
    })
    
    # Testimonials
    print("\nTestimonials:")
    upsert_document("testimonials", "testimonials", {
        "title": "Отзывы наших клиентов",
        "description": "Реальные истории успеха наших клиентов",
        "items": [
            {
                "name": "Анна",
                "age": 28,
                "rating": 5,
                "text": "Очень переживала, но ребята всё объяснили и помогли быстро получить права. Спасибо Патриот!",
            },
            {
                "name": "Игорь",
                "age": 32,
                "rating": 5,
                "text": "Все сделали без нервов, сопровождение на каждом этапе. Рекомендую!",
            },
            {
                "name": "Дмитрий",
                "age": 41,
                "rating": 5,
                "text": "Права получил в срок, как и обещали. Отличная автошкола!",
            },
        ]
    })
    
    # Header
    print("\nHeader:")
    upsert_document("header", "header", {
        "logo": "Патриот",
        "navigation": [
            {"label": "Услуги", "href": "#services"},
            {"label": "Преимущества", "href": "#features"},
            {"label": "Процесс", "href": "#process"},
            {"label": "Гарантии", "href": "#guarantees"},
            {"label": "Отзывы", "href": "#testimonials"},
            {"label": "FAQ", "href": "#faq"},
        ],
        "cta": "Заказать консультацию"
    })
    
    # Footer
    print("\nFooter:")
    upsert_document("footer", "footer", {
        "company": "Патриот - Центр оформления водительских прав",
        "quickLinks": [
            {"label": "Услуги", "href": "#services"},
            {"label": "Преимущества", "href": "#features"},
            {"label": "Процесс", "href": "#process"},
            {"label": "Гарантии", "href": "#guarantees"},
            {"label": "Отзывы", "href": "#testimonials"},
            {"label": "FAQ", "href": "#faq"},
            {"label": "Контакты", "href": "#contact"},
        ],
        "phone": "+7 (XXX) XXX-XX-XX",
        "email": "info@patriot.ru",
        "address": "Россия, Москва"
    })
    
    # License
    print("\nLicense:")
    upsert_document("license", "license", {
        "title": "Лицензия и сертификаты",
        "description": "Мы имеем все необходимые лицензии и сертификаты для предоставления услуг",
        "images": [
            {
                "alt": "Лицензия на образовательную деятельность",
                "title": "Лицензия",
            },
            {
                "alt": "Приложение к лицензии",
                "title": "Приложение",
            },
        ]
    })
    
    print("\n✨ Seeding complete!")

if __name__ == "__main__":
    main()
