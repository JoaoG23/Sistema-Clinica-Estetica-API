PGDMP     !                
    z            poligonos_db    11.15    11.15                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false                       1262    264663    poligonos_db    DATABASE     �   CREATE DATABASE poligonos_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Portuguese_Brazil.1252' LC_CTYPE = 'Portuguese_Brazil.1252';
    DROP DATABASE poligonos_db;
             postgres    false            �            1259    264664    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         postgres    false            �            1259    265817 
   retangulos    TABLE     �   CREATE TABLE public.retangulos (
    id integer NOT NULL,
    descricao character varying(255) NOT NULL,
    altura numeric(12,2) NOT NULL,
    largura numeric(12,2) NOT NULL,
    perimetro numeric(12,2),
    area numeric(12,2)
);
    DROP TABLE public.retangulos;
       public         postgres    false            �            1259    265815    retangulos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.retangulos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.retangulos_id_seq;
       public       postgres    false    198                       0    0    retangulos_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.retangulos_id_seq OWNED BY public.retangulos.id;
            public       postgres    false    197            �            1259    265825 
   triangulos    TABLE     �   CREATE TABLE public.triangulos (
    id integer NOT NULL,
    descricao character varying(255) NOT NULL,
    altura_lados numeric(12,2) NOT NULL,
    perimetro numeric(12,2),
    area numeric(12,2)
);
    DROP TABLE public.triangulos;
       public         postgres    false            �            1259    265823    triangulos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.triangulos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.triangulos_id_seq;
       public       postgres    false    200                       0    0    triangulos_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.triangulos_id_seq OWNED BY public.triangulos.id;
            public       postgres    false    199            �
           2604    265820    retangulos id    DEFAULT     n   ALTER TABLE ONLY public.retangulos ALTER COLUMN id SET DEFAULT nextval('public.retangulos_id_seq'::regclass);
 <   ALTER TABLE public.retangulos ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    197    198    198            �
           2604    265828    triangulos id    DEFAULT     n   ALTER TABLE ONLY public.triangulos ALTER COLUMN id SET DEFAULT nextval('public.triangulos_id_seq'::regclass);
 <   ALTER TABLE public.triangulos ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    200    199    200                      0    264664    SequelizeMeta 
   TABLE DATA               /   COPY public."SequelizeMeta" (name) FROM stdin;
    public       postgres    false    196   �       
          0    265817 
   retangulos 
   TABLE DATA               U   COPY public.retangulos (id, descricao, altura, largura, perimetro, area) FROM stdin;
    public       postgres    false    198                    0    265825 
   triangulos 
   TABLE DATA               R   COPY public.triangulos (id, descricao, altura_lados, perimetro, area) FROM stdin;
    public       postgres    false    200   9                  0    0    retangulos_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.retangulos_id_seq', 1, false);
            public       postgres    false    197                       0    0    triangulos_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.triangulos_id_seq', 1, false);
            public       postgres    false    199            �
           2606    264668     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public         postgres    false    196            �
           2606    265822    retangulos retangulos_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.retangulos
    ADD CONSTRAINT retangulos_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.retangulos DROP CONSTRAINT retangulos_pkey;
       public         postgres    false    198            �
           2606    265830    triangulos triangulos_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.triangulos
    ADD CONSTRAINT triangulos_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.triangulos DROP CONSTRAINT triangulos_pkey;
       public         postgres    false    200               3   x�32022�4252054��M.JM,I�MJ,N����L�L���*����� ���      
      x������ � �            x������ � �     