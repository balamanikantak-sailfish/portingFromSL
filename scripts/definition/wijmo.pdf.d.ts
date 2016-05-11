/*
    *
    * Wijmo Library 5.20161.143
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the Wijmo Commercial License.
    * sales@wijmo.com
    * http://wijmo.com/products/wijmo-5/license/
    *
    */
interface Function {
    __super__: any;
}
declare module wijmo.pdf {
}
declare module wijmo.pdf {
    interface _KerningPair {
        first: string;
        second: string;
        kerning: number;
    }
    class _AFMFont {
        ascender: number;
        decender: number;
        bbox: number[];
        glyphWidths: {
            [index: string]: number;
        };
        charWidths: number[];
        lineGap: number;
        kerningPairs: _KerningPair[];
        constructor(name: string);
        encodeText(text: string): string;
        characterToGlyph(character: number): string;
        widthOfGlyph: (glyph: any) => number;
        private _parseFontBBox(val);
        private _getCharWidths();
        private _parseGlyphWidths(val);
        private _decodeBase64(val);
        private _parseKerningPairs(val);
    }
}

declare module wijmo.pdf {
    /**
    * Specifies the shape that shall be used at the ends of open subpaths
    * (and dashes, if any) when they are stroked.
    */
    enum PdfLineCapStyle {
        /**
        * The stroke is squared off at the endpoint of the path.
        */
        Butt = 0,
        /**
        * A semicircular arc with a diameter equal to the line width is
        * drawn around the endpoint and is filled in.
        */
        Round = 1,
        /**
        * The stroke continues beyond the endpoint of the path for a
        * distance equal to the half of the line width and is squared off.
        */
        Square = 2,
    }
    /**
    * Specifies the shape to be used at the corners of paths that are stroked.
    */
    enum PdfLineJoinStyle {
        /**
        * The outer edges of the strokes for the two segments are extended
        * until they meet at an angle.
        */
        Miter = 0,
        /**
        * An arc of a circle with a diameter equal to the line width is drawn
        * around the point where the two segments meet.
        */
        Round = 1,
        /**
        * The two segments are finished with butt caps and the resulting notch
        * beyond the ends of the segments is filled with a triangle.
        */
        Bevel = 2,
    }
    /**
    * Specifies a rule that determines if a point falls inside the enclosed path.
    */
    enum PdfFillRule {
        /**
        * Non-zero rule.
        */
        NonZero = 0,
        /**
        * Even-odd rule.
        */
        EvenOdd = 1,
    }
    /**
    * Specifies the page orientation.
    */
    enum PdfPageOrientation {
        /**
        * Portrait orientation.
        */
        Portrait = 0,
        /**
        * Landscape orientation.
        */
        Landscape = 1,
    }
    /**
    * Specifies the horizontal alignment of the image.
    */
    enum PdfImageHorizontalAlign {
        /**
        * Aligns the image to the left edge of the drawing area.
        */
        Left = 0,
        /**
        * Aligns the image in the middle of the drawing area.
        */
        Center = 1,
        /**
        * Aligns the image to the right edge of the drawing area.
        */
        Right = 2,
    }
    /**
    * Specifies the vertical alignment of the image.
    */
    enum PdfImageVerticalAlign {
        /**
        * Aligns the image to the top edge of the drawing area.
        */
        Top = 0,
        /**
        * Aligns the image in the middle of the drawing area.
        */
        Center = 1,
        /**
        * Aligns the image to the bottom edge of the drawing area.
        */
        Bottom = 2,
    }
    /**
    * Specifies the horizontal alignment of text content.
    */
    enum PdfTextHorizontalAlign {
        /**
        * Text is aligned to the left.
        */
        Left = 0,
        /**
        * Text is centered.
        */
        Center = 1,
        /**
        * Text is aligned to the right.
        */
        Right = 2,
        /**
        * Text is justified.
        */
        Justify = 3,
    }
    /**
    * Specifies the page size, in points.
    */
    enum PdfPageSize {
        /**
        * Represents the A0 page size.
        */
        A0 = 0,
        /**
        * Represents the A1 page size.
        */
        A1 = 1,
        /**
        * Represents the A2 page size.
        */
        A2 = 2,
        /**
        * Represents the A3 page size.
        */
        A3 = 3,
        /**
        * Represents the A4 page size.
        */
        A4 = 4,
        /**
        * Represents the A5 page size.
        */
        A5 = 5,
        /**
        * Represents the A6 page size.
        */
        A6 = 6,
        /**
        * Represents the A7 page size.
        */
        A7 = 7,
        /**
        * Represents the A8 page size.
        */
        A8 = 8,
        /**
        * Represents the A9 page size.
        */
        A9 = 9,
        /**
        * Represents the A10 page size.
        */
        A10 = 10,
        /**
        * Represents the B0 page size.
        */
        B0 = 11,
        /**
        * Represents the B1 page size.
        */
        B1 = 12,
        /**
        * Represents the B2 page size.
        */
        B2 = 13,
        /**
        * Represents the B3 page size.
        */
        B3 = 14,
        /**
        * Represents the B4 page size.
        */
        B4 = 15,
        /**
        * Represents the B5 page size.
        */
        B5 = 16,
        /**
        * Represents the B6 page size.
        */
        B6 = 17,
        /**
        * Represents the B7 page size.
        */
        B7 = 18,
        /**
        * Represents the B8 page size.
        */
        B8 = 19,
        /**
        * Represents the B9 page size.
        */
        B9 = 20,
        /**
        * Represents the B10 page size.
        */
        B10 = 21,
        /**
        * Represents the C0 page size.
        */
        C0 = 22,
        /**
        * Represents the C1 page size.
        */
        C1 = 23,
        /**
        * Represents the C2 page size.
        */
        C2 = 24,
        /**
        * Represents the C3 page size.
        */
        C3 = 25,
        /**
        * Represents the C4 page size.
        */
        C4 = 26,
        /**
        * Represents the C5 page size.
        */
        C5 = 27,
        /**
        * Represents the C6 page size.
        */
        C6 = 28,
        /**
        * Represents the C7 page size.
        */
        C7 = 29,
        /**
        * Represents the C8 page size.
        */
        C8 = 30,
        /**
        * Represents the C9 page size.
        */
        C9 = 31,
        /**
        * Represents the C10 page size.
        */
        C10 = 32,
        /**
        * Represents the RA0 page size.
        */
        RA0 = 33,
        /**
        * Represents the RA1 page size.
        */
        RA1 = 34,
        /**
        * Represents the RA2 page size.
        */
        RA2 = 35,
        /**
        * Represents the RA3 page size.
        */
        RA3 = 36,
        /**
        * Represents the RA4 page size.
        */
        RA4 = 37,
        /**
        * Represents the SRA0 page size.
        */
        SRA0 = 38,
        /**
        * Represents the SRA1 page size.
        */
        SRA1 = 39,
        /**
        * Represents the SRA2 page size.
        */
        SRA2 = 40,
        /**
        * Represents the SRA3 page size.
        */
        SRA3 = 41,
        /**
        * Represents the SRA4 page size.
        */
        SRA4 = 42,
        /**
        * Represents the executive page size.
        */
        Executive = 43,
        /**
        * Represents the folio page size.
        */
        Folio = 44,
        /**
        * Represents the legal page size.
        */
        Legal = 45,
        /**
        * Represents the letter page size.
        */
        Letter = 46,
        /**
        * Represents the tabloid page size.
        */
        Tabloid = 47,
    }
}

declare module wijmo.pdf {
    /** Infrastructure. */
    interface _IPdfTextFlowCtxState {
        xo: number;
        yo: number;
        lineGap: number;
    }
    /**
    * Represents text settings used by @see:PdfPageArea.drawText and @see:PdfPageArea.measureText methods.
    */
    interface IPdfTextSettings {
        /**
        * Determines how text is aligned within the drawing area.
        * The default value is <b>Left</b>.
        */
        align?: PdfTextHorizontalAlign;
        /**
        * Indicates whether line wrapping should be used or not.
        * The property is ignored if @see:IPdfTextSettings.width is defined.
        * The default value is true.
        */
        lineBreak?: boolean;
        /**
        * Determines the width of the text area in points to which the text should wrap.
        * The default value is undefined which means that the text area will be limited by
        * right margin of the page.
        * Use Infinity to indicate that the text area has an infinite width.
        * If defined, forces the @see:IPdfTextSettings.lineBreak property to be enabled.
        */
        width?: number;
        /**
        * Determines the height of the drawing area in points to which the text should be clipped.
        * The default value is undefined which means that the text area will be limited by
        * bottom edge of the body section.
        * Use Infinity to indicate that the text area has an infinite height.
        */
        height?: number;
        /**
        * Determines the character to display at the end of the text when it exceeds
        * the given area.The default value is undefined, that is, ellipsis is not displayed.
        * Set to true to use the default character.
        */
        ellipsis?: any;
        /**
        * Determines the number of columns to flow the text into.
        * The default value is 1.
        */
        columns?: number;
        /**
        * Determines the spacing between each column, in points.
        * The default value is 18.
        */
        columnGap?: number;
        /**
        * Determines the value of indentaion in each paragraph of text, in points.
        * The default value is 0.
        */
        indent?: number;
        /**
        * Determines the spacing between paragraphs of text.
        * The default value is 0.
        */
        paragraphGap?: number;
        /**
        * Determines the spacing between lines of text.
        * The default value is 0.
        */
        lineGap?: number;
        /**
        * Determines the spacing between words in the text.
        * The default value is 0.
        */
        wordSpacing?: number;
        /**
        * Determines the spacing between text characters.
        * The default value is 0.
        */
        characterSpacing?: number;
        /**
        * Indicates whether the text should be filled or not.
        * The default value is true.
        */
        fill?: boolean;
        /**
        * Indicates whether the text should be stroked or not.
        * The default value is false.
        */
        stroke?: boolean;
        /**
        * Determines a URL used to create a link annotation (URI action).
        */
        link?: string;
        /**
        * Indicates whether the text should be underlined or not.
        * The default value is false.
        */
        underline?: boolean;
        /**
        * Indicates whether the text should be striked out or not.
        * The default value is false.
        */
        strike?: boolean;
        /**
        * Indicates whether subsequent text should be continued right after that or
        * it will be a new paragraph. If true, the text settings will be retained
        * between drawText calls. It means that options argument will be merged with
        * the one taken from the previous drawText call.
        *
        * The default value is false.
        */
        continued?: boolean;
    }
    /**
    * Represents the settings used by @see:PdfPageArea.drawText method to draw a text
    * with the specified @see:PdfPen and @see:PdfBrush.
    */
    interface IPdfTextDrawSettings extends IPdfTextSettings {
        /**
        * Determines the font to use. If not specified, the default document font will be
        * used (@see:PdfDocument.setFont method).
        */
        font?: PdfFont;
        /**
        * Determines the pen to stroke the text. If not specified, the default document
        * pen will be used (@see:PdfDocument.setPen method).
        */
        pen?: any;
        /**
        * Determines the brush to fill the text. If not specified, the default document
        * brush will be used (@see:PdfDocument.setBrush method).
        */
        brush?: any;
    }
    /**
     * Represents the image drawing settings used by @see:PdfPageArea.drawImage method.
     *
     * If neither width nor height options are provided, then the image will be rendered
     * in its original size. If only width is provided, then the image will be scaled
     * proportionally to fit in the provided width. If only height is provided, then the
     * image will be scaled proportionally to fit in the provided height. If both width
     * and height are provided, then image will be stretched to the dimensions depending
     * on the stretchProportionally property.
     */
    interface IPdfImageDrawSettings {
        /**
        * Determines the width of the image, in points.
        */
        width?: number;
        /**
        * Determines the height of the image, in points.
        */
        height?: number;
        /**
        * Indicates whether an image will be stretched proportionally or not, if both width
        * and height options are provided.
        */
        stretchProportionally?: boolean;
        /**
        * Determines the horizontal alignment in case of proportional stretching.
        */
        align?: PdfImageHorizontalAlign;
        /**
        * Determines the vertical alignment in case of proportional stretching.
        */
        vAlign?: PdfImageVerticalAlign;
    }
    /**
    * Represents a range of buffered pages returned by @see:PdfDocument.bufferedPageRange method.
    */
    interface IPdfBufferedPageRange {
        /**
        * Determines the zero-based index of the first buffered page.
        */
        start: number;
        /**
        * Determines the count of buffered pages.
        */
        count: number;
    }
    /**
    * Represents the font attributes.
    */
    interface IPdfFontAttributes {
        /**
        * Glyphs have finishing strokes, flared or tapering ends, or have actual
        * serifed endings.
        */
        cursive?: boolean;
        /**
        * Fantasy fonts are primarily decorative fonts that contain playful representations
        * of characters.
        */
        fantasy?: boolean;
        /**
        * All glyphs have the same width.
        */
        monospace?: boolean;
        /**
        * Glyphs have finishing strokes, flared or tapering ends, or have actual
        * serifed endings.
        */
        serif?: boolean;
        /**
        * Glyphs have stroke endings that are plain.
        */
        sansSerif?: boolean;
    }
    /**
    * Represents the settings of the font to register by @see:PdfDocument.registerFont and
    * @see:PdfDocument.registerFontAsync methods.
    */
    interface IPdfFontFile extends IPdfFontAttributes {
        /**
        * An ArrayBuffer containing binary data or URL to load the font from.
        * Following font formats are supported: TrueType (.ttf), TrueType Collection (.ttc),
        * Datafork TrueType (.dfont).
        */
        source: any;
        /**
        * The name of the font to use.
        */
        name: string;
        /**
        * The style of the font. One of the following values: 'normal', 'italic', 'oblique'.
        */
        style?: string;
        /**
        * The weight of the font. One of the following values: 'normal', 'bold', '100', '200',
        *'300', '400', '500', '600', '700', '800', '900'.
        */
        weight?: string;
        /**
        * An optional parameter determining the TrueType Collection or Datafork TrueType
        * font family.
        */
        family?: string;
    }
    /**
    * Represents the document information used by @see:PdfDocument.info property.
    */
    interface IPdfDocumentInfo {
        /**
        * Determines the name of the person who created the document.
        */
        author?: string;
        /**
        * Determines the date and time the document was created on.
        */
        creationDate?: Date;
        /**
        * Determines the keywords associated with the document.
        */
        keywords?: string;
        /**
        * Determines the date and time when the document was last modified.
        */
        modDate?: Date;
        /**
        * Determines the subject of the document.
        */
        subject?: string;
        /**
        * Determines the title of the document.
        */
        title?: string;
    }
    /**
    * Represents the page margins.
    */
    interface IPdfPageMargins {
        /**
        * Determines the bottom margin, in points.
        */
        bottom: number;
        /**
        * Determines the left margin, in points.
        */
        left: number;
        /**
        * Determines the right margin, in points.
        */
        right: number;
        /**
        * Determines the top margin, in points.
        */
        top: number;
    }
    /**
    * Represents the page settings.
    */
    interface IPdfPageSettings {
        /**
        * Determines the layout of the page.
        */
        layout?: PdfPageOrientation;
        /**
        * Determines the margins of the page.
        */
        margins?: IPdfPageMargins;
        /**
        * Determines the dimensions of the page.
        * The following values are supported:
        * <ul>
        *  <li><b>@see:PdfPageSize</b>: predefined sizes.</li>
        *  <li><b>@see:Size</b>: custom sizes.</li>
        * </ul>
        */
        size?: any;
    }
    /**
    * Represents the text measurement information returned by @see:PdfPageArea.measureText method.
    */
    interface IPdfTextMeasurementInfo {
        /**
        * Determines the text size, in points.
        */
        size: Size;
        /**
        * Determines the character count.
        */
        charCount: number;
    }
}

declare module wijmo.pdf {
    var _Errors: {
        InvalidArg: (name: string) => string;
        PathStarted: string;
        BufferPagesMustBeEnabled: string;
        AbstractMethod: string;
        FontNameMustBeSet: string;
        FontSourceMustBeStringArrayBuffer: string;
        FontSourceMustBeString: string;
        FontSourceMustBeArrayBuffer: string;
        EmptyUrl: string;
        UndefinedMimeType: string;
        InvalidImageDataUri: string;
        InvalidImageFormat: string;
    };
}

declare module wijmo.pdf {
    var _IE: boolean;
    /**
     * Saves the Blob object as a file.
     * @param blob The Blob object to save.
     * @param fileName The name with which the file is saved.
    */
    function saveBlob(blob: Blob, fileName: string): void;
    /**
    * Converts a point unit value to a pixel unit value.
    *
    * @param value The value to convert.
    * @return The converted value.
    */
    function ptToPx(value: number): number;
    /**
    * Converts a pixel unit value to a point unit value.
    *
    * @param value The value to convert.
    * @return The converted value.
    */
    function pxToPt(value: number): number;
    function _asColor(colorOrString: any, clone?: boolean): Color;
    function _asPdfPen(penOrColor: any, nullOK?: boolean): PdfPen;
    function _asPdfBrush(brushOrColor: any, nullOK?: boolean): PdfBrush;
    function _asPdfFont(font: PdfFont, nullOK?: boolean): PdfFont;
    function _asPt(value: any, emptyOK?: boolean, emptyValue?: number): number;
    function _formatMacros(str: string, dict: any): string;
    function _compare(a: any, b: any): boolean;
    function _shallowCopy(src: any): any;
    function _toTitleCase(value: string): string;
}

declare module wijmo.pdf {
    /**
     * Represents the dash pattern used to stroke paths.
     */
    class PdfDashPattern {
        private _dash;
        private _gap;
        private _phase;
        /**
        * Initializes a new instance of the @see:PdfDashPattern class.
        *
        * @param dash The length of alternating dashes, in points.
        * @param gap The length of alternating gaps, in points.
        * @param phase The distance in the dash pattern to start the dash at, in points.
        */
        constructor(dash?: number, gap?: number, phase?: number);
        /**
        * Gets or sets the length of alternating dashes, in points.
        * The default value is null which indicates no dash pattern, but a solid line.
        */
        dash: number;
        /**
        * Gets or sets the length of alternating gaps, in points.
        * The default value is equal to @see:dash which indicates that dashes and gaps will
        * have the same length.
        */
        gap: number;
        /**
        * Gets or sets the distance in the dash pattern to start the dash at, in points.
        * The default value is 0.
        */
        phase: number;
        /**
        * Creates a copy of this @see:PdfDashPattern.
        * @return A copy of this dash pattern.
        */
        clone(): PdfDashPattern;
        /**
        * Determines whether the specified @see:PdfDashPattern instance is equal
        * to the current one.
        *
        * @param value @see:PdfDashPattern to compare.
        * @return true if the specified object is equal to the current one, otherwise false.
        */
        equals(value: PdfDashPattern): boolean;
    }
}

declare module wijmo.pdf {
    /**
    * Represents an abstract class that serves as a base class for all brushes.
    * Instances of any class that derives from this class are used to fill areas and text.
    *
    * This class is not intended to be instantiated in your code.
    */
    class PdfBrush {
        /**
        * Creates a copy of this @see:PdfBrush.
        * @return A copy of this brush.
        */
        clone(): PdfBrush;
        /**
        * Determines whether the specified @see:PdfBrush instance is equal to the current one.
        *
        * @param value @see:PdfBrush to compare.
        * @return true if the specified object is equal to the current one, otherwise false.
        */
        equals(value: PdfBrush): boolean;
        _getBrushObject(area: PdfPageArea): any;
    }
}

declare module wijmo.pdf {
    /**
    * Represents an object which determines a transition point of a gradient.
    */
    class PdfGradientStop {
        private _offset;
        private _color;
        private _opacity;
        /**
        * Initializes a new instance of the @see:PdfGradientStop class.
        *
        * @param offset The location of the gradient stop on the gradient axis.
        * @param color The color of the gradient stop. A @see:wijmo.Color object or
        * any string acceptable by the @see:wijmo.Color.fromString method.
        * @param opacity The opacity of the gradient stop.
        */
        constructor(offset?: number, color?: any, opacity?: number);
        /**
        * Gets or sets the location of the gradient stop on gradient axis of the brush.
        * The value must be in range [0, 1], where 0 indicates that the gradient stop is
        * placed at the beginning of the gradient axis, while 1 indicates that the
        * gradient stop is placed at the end of the gradient axis.
        * The default value is 0.
        */
        offset: number;
        /**
        * Gets or sets the color of the gradient stop.
        * The default color is black.
        */
        color: Color;
        /**
        * Gets or sets the opacity of the gradient stop.
        * The value must be in range [0, 1], where 0 indicates that the gradient stop is
        * completely transparent, while 1 indicates that the gradient stop is completely
        * opaque. The default value is 1.
        */
        opacity: number;
        /**
        * Creates a copy of this @see:PdfGradientStop.
        * @return A copy of this gradient stop.
        */
        clone(): PdfGradientStop;
        /**
        * Determines whether the specified @see:PdfGradientStop instance is equal to
        * the current one.
        *
        * @param value @see:PdfGradientStop to compare.
        * @return true if the specified object is equal to the current one, otherwise false.
        */
        equals(value: PdfGradientStop): boolean;
    }
}

declare module wijmo.pdf {
    /**
    * Represents an abstract class that serves as a base class for the
    * @see:PdfLinearGradientBrush and @see:PdfRadialGradientBrush classes.
    *
    * This class is not intended to be instantiated in your code.
    */
    class PdfGradientBrush extends PdfBrush {
        private _opacity;
        private _stops;
        /**
        * Initializes a new instance of the @see:PdfGradientBrush class.
        *
        * @param stops The @see:PdfGradientStop array to set on this brush.
        * @param opacity The opacity of this brush.
        */
        constructor(stops?: PdfGradientStop[], opacity?: number);
        /**
        * Gets or sets the opacity of the brush.
        * The value must be in range [0, 1], where 0 indicates that the brush is
        * completely transparent and 1 indicates that the brush is completely opaque.
        * The default value is 1.
        */
        opacity: number;
        /**
        * Gets or sets an array of @see:PdfGradientStop objects representing a color,
        * offset and opacity within the brush's gradient axis.
        * The default value is an empty array.
        */
        stops: PdfGradientStop[];
        /**
        * Determines whether the specified @see:PdfGradientBrush instance is equal
        * to the current one.
        *
        * @param value @see:PdfGradientBrush to compare.
        * @return true if the specified object is equal to the current one, otherwise false.
        */
        equals(value: PdfGradientBrush): boolean;
        private _cloneStopsArray(value);
    }
}

declare module wijmo.pdf {
    /**
    * Represents a brush used to fill an area with a linear gradient.
    */
    class PdfLinearGradientBrush extends PdfGradientBrush {
        private _x1;
        private _y1;
        private _x2;
        private _y2;
        /**
        * Initializes a new instance of the @see:PdfLinearGradientBrush class.
        *
        * @param x1 The X-coordinate of the starting point of the linear gradient.
        * @param y1 The Y-coordinate of the starting point of the linear gradient.
        * @param x2 The X-coordinate of the ending point of the linear gradient.
        * @param y2 The Y-coordinate of the ending point of the linear gradient.
        * @param stops The @see:PdfGradientStop array to set on this brush.
        * @param opacity The opacity of this brush.
        */
        constructor(x1: number, y1: number, x2: number, y2: number, stops: PdfGradientStop[], opacity: number);
        /**
        * Gets or sets the X-coordinate of the starting point of the linear gradient,
        * in page area coordinates, in points.
        */
        x1: number;
        /**
        * Gets or sets the Y-coordinate of the starting point of the linear gradient,
        * in page area coordinates, in points.
        */
        y1: number;
        /**
        * Gets or sets the X-coordinate of the ending point of the linear gradient,
        * in page area coordinates, in points.
        */
        x2: number;
        /**
        * Gets or sets the Y-coordinate of the ending point of the linear gradient,
        * in page area coordinates, in points.
        */
        y2: number;
        /**
        * Creates a copy of this @see:PdfLinearGradientBrush.
        * @return A copy of this brush.
        */
        clone(): PdfLinearGradientBrush;
        /**
        * Determines whether the specified @see:PdfLinearGradientBrush instance is equal to
        * the current one.
        *
        * @param value @see:PdfLinearGradientBrush to compare.
        * @return true if the specified object is equal to the current one, otherwise false.
        */
        equals(value: PdfLinearGradientBrush): boolean;
        _getBrushObject(area: PdfPageArea): _IPdfKitGradient;
    }
}

declare module wijmo.pdf {
    /**
    * Represents a brush used to fill an area with a radial gradient.
    */
    class PdfRadialGradientBrush extends PdfGradientBrush {
        private _x1;
        private _y1;
        private _r1;
        private _x2;
        private _y2;
        private _r2;
        /**
        * Initializes a new instance of the @see:PdfRadialGradientBrush class.
        *
        * @param x1 The X-coordinate of the inner circle's center of the radial gradient.
        * @param y1 The Y-coordinate of the inner circle's center of the radial gradient.
        * @param r1 The radius of the inner circle of the radial gradient.
        * @param x2 The X-coordinate of the outer circle's center of the radial gradient.
        * @param y2 The Y-coordinate of the outer circle's center of the radial gradient.
        * @param r2 The radius of the outer circle of the radial gradient.
        * @param stops The @see:PdfGradientStop array to set on this brush.
        * @param opacity The opacity of this brush.
        */
        constructor(x1: number, y1: number, r1: number, x2: number, y2: number, r2: number, stops: PdfGradientStop[], opacity: number);
        /**
        * Gets or sets the X-coordinate of the inner circle's center that represents the
        * starting point of the radial gradient, in page area coordinates, in points.
        */
        x1: number;
        /**
        * Gets or sets the Y-coordinate of the inner circle's center that represents the
        * starting point of the radial gradient, in page area coordinates, in points.
        */
        y1: number;
        /**
        * Gets or sets the radius of the inner circle that represents the starting
        * point of the radial gradient, in page area coordinates, in points.
        */
        r1: number;
        /**
        * Gets or sets the X-coordinate of the outer circle's center that represents the ending point of the radial gradient, in page area coordinates, in points.
        */
        x2: number;
        /**
        * Gets or sets the Y-coordinate of the outer circle's center that represents
        * the ending point of the radial gradient, in page area coordinates, in points.
        */
        y2: number;
        /**
        * Gets or sets the radius of the outer circle that represents the ending point of the
        * radial gradient, in page area coordinates, in points.
        */
        r2: number;
        /**
        * Creates a copy of this @see:PdfRadialGradientBrush.
        * @return A copy of this brush.
        */
        clone(): PdfRadialGradientBrush;
        /**
        * Determines whether the specified @see:PdfRadialGradientBrush instance is equal
        * to the current one.
        *
        * @param value @see:PdfRadialGradientBrush to compare.
        * @return true if the specified object is equal to the current one, otherwise false.
        */
        equals(value: PdfRadialGradientBrush): boolean;
        _getBrushObject(area: PdfPageArea): _IPdfKitGradient;
    }
}

declare module wijmo.pdf {
    /**
    * Represents a brush used to fill an area with a color.
    */
    class PdfSolidBrush extends PdfBrush {
        private _color;
        /**
        * Initializes a new instance of the @see:PdfSolidBrush class.
        *
        * @param color The color of this brush. A @see:wijmo.Color object or any string
        * acceptable by the @see:wijmo.Color.fromString method.
        */
        constructor(color?: any);
        /**
        * Gets or sets the color of the brush.
        * The default color is black.
        */
        color: Color;
        /**
        * Creates a copy of this @see:PdfSolidBrush.
        * @return A copy of this brush.
        */
        clone(): PdfSolidBrush;
        /**
        * Determines whether the specified @see:PdfSolidBrush instance is equal
        * to the current one.
        *
        * @param value @see:PdfSolidBrush to compare.
        * @return true if the specified object is equal to the current one, otherwise false.
        */
        equals(value: PdfSolidBrush): boolean;
        _getBrushObject(area: PdfPageArea): Color;
    }
}

declare module wijmo.pdf {
    /**
     * Determines an object used to stroke paths and text.
     */
    class PdfPen {
        private _color;
        private _brush;
        private _width;
        private _cap;
        private _join;
        private _miterLimit;
        private _dashPattern;
        /**
        * Initializes a new instance of the @see:PdfPen class with the specified color or
        * brush or JavaScript object.
        *
        * The first argument can accept the following values:
        * <ul>
        *  <li>@see:wijmo.Color object or any string acceptable by the @see:wijmo.Color.fromString method.</li>
        *  <li>@see:PdfBrush object.</li>
        *  <li>JavaScript object containing initialization properties (all other arguments are ignored).</li>
        * </ul>
        *
        * @param colorOrBrushOrOptions The color or brush or JavaScript object to use.
        * @param width The width to use.
        * @param dashPattern The dash pattern to use.
        * @param cap The line cap style to use.
        * @param join The line join style to use.
        * @param miterLimit The miter limit to use.
        */
        constructor(colorOrBrushOrOptions?: any, width?: number, dashPattern?: PdfDashPattern, cap?: PdfLineCapStyle, join?: PdfLineJoinStyle, miterLimit?: number);
        /**
        * Gets or sets the color used to stroke paths.
        * The default color is black.
        */
        color: Color;
        /**
        * Gets or sets the brush used to stroke paths.
        * Takes precedence over the @see:color property, if defined.
        */
        brush: PdfBrush;
        /**
        * Gets or sets the line width used to stroke paths, in points.
        * The default width is 1.
        */
        width: number;
        /**
        * Gets or sets the shape that shall be used at the open ends of a stroked path.
        * The default value is <b>Butt</b>.
        */
        cap: PdfLineCapStyle;
        /**
        * Gets or sets the shape to be used at the corners of a stroked path.
        * The default value is <b>Miter</b>.
        */
        join: PdfLineJoinStyle;
        /**
        * Determines the maximum value of the miter length to the line width ratio, when the line
        * join is converted from miter to bevel.
        * The default value is 10.
        */
        miterLimit: number;
        /**
        * Gets the dash pattern used to stroke paths.
        * The default value is a solid line.
        */
        dashPattern: PdfDashPattern;
        /**
        * Creates a copy of this @see:PdfPen.
        * @return A copy of this pen.
        */
        clone(): PdfPen;
        /**
        * Determines whether the specified @see:PdfPen instance is equal to the current one.
        *
        * @param value @see:PdfPen to compare.
        * @return true if the specified object is equal to the current one, otherwise false.
        */
        equals(value: PdfPen): boolean;
    }
}

declare module wijmo.pdf {
    /**
     * Represents a font.
     */
    class PdfFont {
        static _DEF_NATIVE: string;
        static _KNOWN_WEIGHTS: {
            '100': number;
            '200': number;
            '300': number;
            '400': number;
            '500': number;
            '600': number;
            '700': number;
            '800': number;
            '900': number;
            'normal': number;
            'bold': number;
        };
        static _KNOWN_STYLES: {
            'normal': number;
            'italic': number;
            'oblique': number;
        };
        static _DEF_PDFKIT_FONT: PdfFont;
        static _DEF_FONT: PdfFont;
        private _family;
        private _size;
        private _style;
        private _weight;
        /**
        * Initializes a new instance of the @see:PdfFont class.
        *
        * @param family The family name of the font.
        * @param size The size of the font.
        * @param style The style of the font.
        * @param weight The weight of the font.
        */
        constructor(family?: string, size?: number, style?: string, weight?: string);
        /**
        * Gets or sets the family name of the font.
        *
        * The list of the font family names in the order of preferences,
        * separated by commas. Each font family name can be the one that
        * was registered using the @see:PdfDocument.registerFont method or
        * the name of one of the PDF standard font families: 'courier',
        * 'helvetica', 'symbol', 'times', 'zapfdingbats' or the superfamily
        * name: 'cursive', 'fantasy', 'monospace', 'serif', 'sans-serif'.
        */
        family: string;
        /**
        * Gets or sets the size of the font.
        */
        size: number;
        /**
         * Gets or sets the style of the font.
         *
         * The following values are supported: 'normal', 'italic', 'oblique'.
         */
        style: string;
        /**
         * Gets or sets the weight of the font.
         *
         * The following values are supported: 'normal', 'bold', '100', '200', '300',
         * '400', '500', '600', '700', '800', '900'.
         */
        weight: string;
        /**
        * Creates a copy of this @see:PdfFont.
        * @return A copy of this font.
        */
        clone(): PdfFont;
        /**
        * Determines whether the specified @see:PdfFont instance is equal to the current one.
        *
        * @param value @see:PdfFont to compare.
        * @return true if the specified object is equal to the current one, otherwise false.
        */
        equals(value: PdfFont): boolean;
    }
}

declare module wijmo.pdf {
    class _PdfFontRegistrar {
        private _fonts;
        private _weightNameToNum;
        private _doc;
        private _findFontCache;
        private _internalFontNames;
        constructor(doc: _IPdfKitDocument);
        registerFont(font: IPdfFontFile): string;
        findFont(name: string, style?: string, weight?: string): string;
        private _normalizeFontSelector(name, style?, weight?);
        private _findFont(name, style?, weight?);
        private _findFontWeightFallback(name, style, weight, availableWeights?);
        private _makeInternalName(ns);
    }
}

declare module wijmo.pdf {
    /**
    * Represents an area of a page with its own coordinate system, where (0, 0) points
    * to the top-left corner.
    * Provides methods for drawing text, images, paths and transformations.
    *
    * This class is not intended to be instantiated in your code.
    */
    class PdfPageArea {
        _pdfdoc: PdfDocument;
        _offset: Point;
        private _graphics;
        private _drawingText;
        private _ctxProps;
        /**
        * Initializes a new instance of the @see:PdfRunningTitle class.
        */
        constructor();
        /**
        * Gets or sets the X-coordinate (in points) of the current point in the text flow
        * used to draw a text or an image.
        */
        x: number;
        /**
        * Gets or sets the Y-coordinate (in points) of the current point in the text flow
        * used to draw a text or an image.
        */
        y: number;
        /**
        * Gets or sets the spacing between each line of text, in points.
        *
        * The default value is 0.
        */
        lineGap: number;
        /**
        * Gets the height of the area, in points.
        */
        height: number;
        /**
        * Gets the width of the area, in points.
        */
        width: number;
        /**
        * Gets an object that provides ability to draw paths.
        */
        paths: PdfPaths;
        /**
        * Draws a text with the given options and returns the measurement information.
        *
        * If @see:options.pen, @see:options.brush or @see:options.font are omitted, then the current document's
        * pen, brush or font are used (@see:PdfDocument.setPen, @see:PdfDocument.setBrush,
        * @see:PdfDocument.setFont).
        *
        * The text is drawn within the rectangular area for which top-left corner, width and
        * height are defined by the x, y, options.width and options.height accordingly.
        * If x and y are not defined, then @see:x and @see:y are used instead.
        *
        * The text is wrapped and clipped automatically within the area.
        * If options.height is not defined and the text exceeds the bottom body edge,
        * then the text will be extended to a new page automatically.
        *
        * Finally, the method updates @see:x and @see:y.
        * Hence, any subsequent text or image starts below this point
        * (depends on options.continued).
        *
        * The measurement result doesn't reflect the fact that text can be split into
        * multiple pages or columns; the text is treated as a single block.
        *
        * @param text The text to draw.
        * @param x The X-coordinate of the point to draw the text at, in points.
        * @param y The Y-coordinate of the point to draw the text at, in points.
        * @param options Determines the text drawing options.
        * @return A @see:IPdfTextMeasurementInfo object determines the measurement information.
        */
        drawText(text: string, x?: number, y?: number, options?: IPdfTextDrawSettings): IPdfTextMeasurementInfo;
        /**
        * Draws an image in JPG or PNG format with the given options.
        *
        * If x and y are not defined, then @see:x and @see:y are used instead.
        * Finally, the method updates @see:y.
        * Hence, any subsequent text or image starts below this point.
        *
        * @param url A string containing the URL to get the image from or the data URI containing a base64 encoded image.
        * @param x The x-coordinate of the point to draw the image at, in points.
        * @param y The y-coordinate of the point to draw the image at, in points.
        * @param options Determines the image drawing options.
        * @return The @see:PdfPageArea object.
        */
        drawImage(url: string, x?: number, y?: number, options?: IPdfImageDrawSettings): PdfPageArea;
        /**
        * Gets the line height with a given font.
        *
        * If font is not specified, then font used in the current document is used.
        *
        * @param font Font to get the line height.
        * @return The line height, in points.
        */
        lineHeight(font?: PdfFont): number;
        /**
        * Measures a text with the given font and text drawing options without rendering it.
        *
        * If font is not specified, then the font used in the current document is used.
        *
        * The method uses the same text rendering engine as @see:drawText, so it is tied up
        * in the same way to @see:x and the right page margin, if options.width is not
        * provided. The measurement result doesn't reflect the fact that text can be split
        * into multiple pages or columns; the text is treated as a single block.
        *
        * @param text Text to measure.
        * @param font Font to be applied on the text.
        * @param options Determines the text drawing options.
        * @return A @see:IPdfTextMeasurementInfo object determines the measurement information.
        */
        measureText(text: string, font?: PdfFont, options?: IPdfTextSettings): IPdfTextMeasurementInfo;
        /**
        * Moves down the @see:y by a given number of lines using the given font or,
        * using the font of current document, if not specified.
        *
        * @param lines Number of lines to move down.
        * @param font Font to calculate the line height.
        * @return The @see:PdfPageArea object.
        */
        moveDown(lines?: number, font?: PdfFont): PdfPageArea;
        /**
        * Moves up the @see:y by a given number of lines using the given font or,
        * using the font of current document, if not specified.
        *
        * @param lines Number of lines to move up.
        * @param font Font to calculate the line height.
        * @return The @see:PdfPageArea object.
        */
        moveUp(lines?: number, font?: PdfFont): PdfPageArea;
        /**
        * Scales the graphic context by a specified scaling factor.
        *
        * The scaling factor value within the range [0, 1] indicates that the size will be
        * decreased.
        * The scaling factor value greater than 1 indicates that the size will be increased.
        *
        * @param xFactor The factor to scale the X dimension.
        * @param yFactor The factor to scale the Y dimension. If it is not provided, it is
        * assumed to be equal to xFactor.
        * @param origin The @see:Point to scale around, in points. If it is not provided,
        * then the top left corner is used.
        * @return The @see:PdfPageArea object.
        */
        scale(xFactor: number, yFactor?: number, origin?: Point): PdfPageArea;
        /**
        * Translates the graphic context with a given distance.
        *
        * @param x The distance to translate along the X-axis, in points.
        * @param y The distance to translate along the Y-axis, in points.
        * @return The @see:PdfPageArea object.
        */
        translate(x: number, y: number): PdfPageArea;
        /**
        * Transforms the graphic context with given six numbers which represents a
        * 3x3 transformation matrix.
        *
        * A transformation matrix is written as follows:
        * <table>
        *   <tr><td>a</td><td>b</td><td>0</td></tr>
        *   <tr><td>c</td><td>d</td><td>0</td></tr>
        *   <tr><td>e</td><td>f</td><td>1</td></tr>
        * </table>
        *
        * @param a Value of the first row and first column.
        * @param b Value of the first row and second column.
        * @param c Value of the second row and first column.
        * @param d Value of the second row and second column.
        * @param e Value of the third row and first column.
        * @param f Value of the third row and second column.
        * @return The @see:PdfPageArea object.
        */
        transform(a: number, b: number, c: number, d: number, e: number, f: number): PdfPageArea;
        /**
        * Rotates the graphic context clockwise by a specified angle.
        *
        * @param angle The rotation angle, in degrees.
        * @param origin The @see:Point of rotation, in points. If it is not provided,
        * then the top left corner is used.
        */
        rotate(angle: number, origin?: Point): PdfPageArea;
        _assertPathStarted(): void;
        _initialize(doc: PdfDocument, xo: number, yo: number): void;
        _isDrawingText(): boolean;
        /**
         * Renders a cell with a checkbox inside.
         *
         * @param value Boolean value.
         * @param style A CSSStyleDeclaration object that represents the cell style and
         * positioning.
         *
         * @return A reference to the document.
         */
        _renderBooleanCell(value: boolean, style: CSSStyleDeclaration): PdfPageArea;
        /**
        * Renders a cell with a text inside.
        *
        * @param text Text inside the cell.
        * @param style A CSSStyleDeclaration object that represents the cell style and positioning.
        *
        * @return A reference to the document.
        */
        _renderTextCell(text: string, style: CSSStyleDeclaration): PdfPageArea;
        private _switchCtx();
        private _saveCtx();
        private _textOptionsToNative(value);
        /**	Decomposites some properties to handle the situation when the style was created manually. */
        private _decompositeStyle(style);
        /**
        * Extracts the border values from the CSSStyleDeclaration object.
        *
        * @param style A value to extract from.
        * @return A @see:_IBorder object.
        */
        private _parseBorder(style);
        /**
        * Extracts the padding values from the CSSStyleDeclaration object.
        *
        * @param style Value to extract from.
        * @return The @see:IPadding object.
        */
        private _parsePadding(style);
        private _textAlignToPdf(value);
        /**
        * Renders an empty cell.
        *
        * The following CSSStyleDeclaration properties are supported for now:
        *   left, top
        *   width, height
        *   border<Left \ Right\ Top\ Bottom>Style (if 'none' then no border, otherwise a solid border)
        *   border<Left\ Right\ Top\ Bottom>Width,
        *   border<Left\ Right\ Top\ Bottom>Color
        *   backgroundColor
        *   boxSizing (content-box + border-box)
        *   padding<Left\ Top\ Right\ Bottom>
        *   textAlign
        *   fontFamily, fontStyle, fontWeight, fontSize
        *
        * @param style A CSSStyleDeclaration object that represents the cell style and positioning.
        * @return A ICellInfo object that represents information about the cell's content.
        */
        private _renderCell(style);
    }
}

declare module wijmo.pdf {
    /**
    * Represents the declarative content of the running title.
    */
    class PdfRunningTitleDeclarativeContent {
        private _font;
        private _text;
        private _brush;
        /**
        * Initializes a new instance of the @see:PdfRunningTitleDeclarativeContent class.
        *
        * @param text The text of the running title.
        * @param font Font of the text.
        * @param brushOrColor The @see:PdfBrush or @see:wijmo.Color or any string acceptable
        * by the @see:wijmo.Color.fromString method used to fill the text.
        */
        constructor(text?: string, font?: PdfFont, brushOrColor?: any);
        /**
        * Gets or sets the font of the @see:text.
        */
        font: PdfFont;
        /**
        * Gets or sets the text of the running title.
        *
        * May contain up to 3 tabular characters ('\t') which are used for separating the text
        * into the parts that will be aligned within the page area using left, center and right
        * alignment.
        * Two kinds of macros are supported, '&[Page]' and '&[Pages]'. The former one designates
        * the current page index while the latter one designates the page count.
        *
        * For example, for the first page of a document having ten pages, the following string:
        * <pre>
        *	'&[Page]\\&[Pages]\theader\t&[Page]\\&[Pages]'
        * </pre>
        * will be translated to:
        * <pre>
        *	'1\10 header 1\10'
        * </pre>
        */
        text: string;
        /**
        * Gets or sets the brush used to fill the @see:text.
        */
        brush: PdfBrush;
        /**
        * Creates a copy of this @see:PdfRunningTitleDeclarativeContent.
        * @return A copy of this pen.
        */
        clone(): PdfRunningTitleDeclarativeContent;
        /**
        * Determines whether the specified @see:PdfRunningTitleDeclarativeContent instance
        * is equal to the current one.
        *
        * @param value @see:PdfRunningTitleDeclarativeContent to compare.
        * @return true if the specified object is equal to the current one, otherwise false.
        */
        equals(value: PdfRunningTitleDeclarativeContent): boolean;
    }
}

declare module wijmo.pdf {
    /**
    * Represents a running title of the page, like header and footer.
    *
    * This class is not intended to be instantiated in your code.
    */
    class PdfRunningTitle extends PdfPageArea {
        private _height;
        private _declarative;
        _heightChanged: Event;
        /**
        * Initializes a new instance of the @see:PdfRunningTitle class.
        *
        * @param options An optional object containing initialization settings.
        */
        constructor(options?: any);
        /**
        * Gets or sets an object that provides the ability to setup the running title
        * content declaratively.
        */
        declarative: PdfRunningTitleDeclarativeContent;
        /**
        * Gets or sets the height of the running title, in points.
        * To hide the running title, set this property to 0.
        * Changing this property has no effect on previous drawings; they will not be resized
        * or clipped.
        *
        * The default value is 24.
        */
        height: number;
        drawText(text: any, x?: any, y?: any, options?: IPdfTextDrawSettings): IPdfTextMeasurementInfo;
    }
}

declare module wijmo.pdf {
    class _PdfImageHelper {
        private static DATAURI_CACHE;
        static getDataUri(url: string): string;
        private static _toBase64(buffer);
    }
}

declare module wijmo.pdf {
    /**
    * Provides methods for creating graphics paths and drawing them or using them for clipping.
    *
    * Path creation method calls must be finished with the @see:PdfPaths.stroke,
    * @see:PdfPaths.fill, @see:PdfPaths.fillAndStroke or @see:PdfPaths.clip method.
    * Any document methods which don't apply directly to path creation/ drawing/ clipping
    * (changing a pen, drawing a text, saving the graphics state etc) are prohibited to use
    * until the path is finished.
    * The @see:PdfPaths.lineTo, @see:PdfPaths.bezierCurveTo and @see:PdfPaths.quadraticCurveTo
    * methods should not start the path, they must be preceded with the @see:PdfPaths.moveTo.
    *
    * The methods are chainable:
    * <pre>
    * doc.paths.moveTo(0, 0).lineTo(100, 100).stroke();
    * </pre>
    *
    * This class is not intended to be instantiated in your code.
    */
    class PdfPaths {
        private _doc;
        private _offset;
        private _pathBuffer;
        /**
        * Initializes a new instance of the @see:PdfPaths class.
        *
        * @param doc Document.
        * @param offset Offset.
        */
        constructor(doc: PdfDocument, offset: Point);
        /**
        * Sets a new current point.
        *
        * @param x The X-coordinate of the new point, in points.
        * @param y The Y-coordinate of the new point, in points.
        * @return The @see:PdfPaths object.
        */
        moveTo(x: number, y: number): PdfPaths;
        /**
        * Draws a line from the current point to a new point.
        *
        * The new current point is (x, y).
        *
        * @param x The X-coordinate of the new point, in points.
        * @param y The Y-coordinate of the new point, in points.
        * @return The @see:PdfPaths object.
        */
        lineTo(x: number, y: number): PdfPaths;
        /**
        * Draws a quadratic curve from the current point to a new point using the current point
        * and (cpx, cpy) as the control points.
        *
        * The new current point is (x, y).
        *
        * @param cpx The X-coordinate of the control point, in points.
        * @param cpy The Y-coordinate of the control point, in points.
        * @param x The X-coordinate of the new point, in points.
        * @param y The Y-coordinate of the new point, in points.
        * @return The @see:PdfPaths object.
        */
        quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): PdfPaths;
        /**
        * Draws a bezier curve from the current point to a new point using the (cp1x, cp1y)
        * and (cp2x, cp2y) as the control points.
        *
        * The new current point is (x, y).
        *
        * @param cp1x The X-coordinate of the first control point, in points.
        * @param cp1y The Y-coordinate of the first control point, in points.
        * @param cp2x The X-coordinate of the second control point, in points.
        * @param cp2y The Y-coordinate of the second control point, in points.
        * @param x The X-coordinate of the new point, in points.
        * @param y The Y-coordinate of the new point, in points.
        * @return The @see:PdfPaths object.
        */
        bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): PdfPaths;
        /**
        * Draws a SVG 1.1 path.
        *
        * @param path The SVG path to draw.
        * @return The @see:PdfPaths object.
        */
        svgPath(path: string): PdfPaths;
        /**
        * Closes the current path and draws a line from the current point to the initial
        * point of the current path.
        *
        * @return The @see:PdfPaths object.
        */
        closePath(): PdfPaths;
        /**
        * Draws a rectangle.
        *
        * @param x The X-coordinate of the topleft corner of the rectangle, in points.
        * @param y The Y-coordinate of the topleft corner of the rectangle, in points.
        * @param width The width of the rectangle, in points.
        * @param height The width of the rectangle, in points.
        * @return The @see:PdfPaths object.
        */
        rect(x: number, y: number, width: number, height: number): PdfPaths;
        /**
        * Draws a rounded rectangle.
        *
        * @param x The X-coordinate of the upper-left corner of the rectangle, in points.
        * @param y The Y-coordinate of the upper-left corner of the rectangle, in points.
        * @param width The width of the rectangle, in points.
        * @param height The width of the rectangle, in points.
        * @param cornerRadius The corner radius of the rectangle, in points. The default value is 0.
        * @return The @see:PdfPaths object.
        */
        roundedRect(x: number, y: number, width: number, height: number, cornerRadius?: number): PdfPaths;
        /**
        * Draws an ellipse.
        *
        * @param x The X-coordinate of the center of the ellipse, in points.
        * @param y The Y-coordinate of the center of the ellipse, in points.
        * @param radiusX The radius of the ellipse along the X-axis, in points.
        * @param radiusY The radius of the ellipse along the Y-axis, in points.
        * If it is not provided, then it is assumed to be equal to radiusX.
        * @return The @see:PdfPaths object.
        */
        ellipse(x: number, y: number, radiusX: number, radiusY?: number): PdfPaths;
        /**
        * Draws a circle.
        *
        * @param x The X-coordinate of the center of the circle, in points.
        * @param y The Y-coordinate of the center of the circle, in points.
        * @param radius The radius of the circle, in points.
        * @return The @see:PdfPaths object.
        */
        circle(x: number, y: number, radius: number): PdfPaths;
        /**
        * Draws a polygon using a given points array.
        *
        * @param points An array of two-elements arrays [x, y] specifying
        * the X and Y coordinates of the point, in points.
        * @return The @see:PdfPaths object.
        */
        polygon(points: number[][]): PdfPaths;
        /**
        * Creates a clipping path used to limit the regions of the page affected by
        * painting operators.
        *
        * @param rule The fill rule to use.
        * @return The @see:PdfPaths object.
        */
        clip(rule?: PdfFillRule): PdfPaths;
        /**
        * Fills the path with the specified brush and rule.
        * If brush is not specified, then the default document brush will be used
        * (see the @see:PdfDocument.setBrush method).
        *
        * The brushOrColor argument can accept the following values:
        * <ul>
        *   <li>A @see:PdfBrush object.</li>
        *   <li>
        *     A @see:wijmo.Color object or any string acceptable by the @see:wijmo.Color.fromString method.
        *     In this case, the @see:PdfBrush object with the specified color will be created internally.
        *    </li>
        * </ul>
        *
        * @param brushOrColor The brush or color to use.
        * @param rule The fill rule to use.
        * @return The @see:PdfPaths object.
        */
        fill(brushOrColor?: any, rule?: PdfFillRule): PdfPaths;
        /**
        * Fills and strokes the path with the specified brush, pen and rule.
        * If brush and pen is not specified, then the default document brush and pen will
        * be used (See the @see:PdfDocument.setBrush, @see:PdfDocument.setPen methods).
        *
        * The brushOrColor argument can accept the following values:
        * <ul>
        *   <li>A @see:PdfBrush object.</li>
        *   <li>
        *     A @see:wijmo.Color object or any string acceptable by the @see:wijmo.Color.fromString method.
        *     In this case, the @see:PdfBrush object with the specified color will be created internally.
        *    </li>
        * </ul>
        *
        * The penOrColor argument can accept the following values:
        * <ul>
        *   <li>A @see:PdfPen object.</li>
        *   <li>
        *     A @see:wijmo.Color object or any string acceptable by the @see:wijmo.Color.fromString method.
        *     In this case, the @see:PdfPen object with the specified color will be created internally.
        *   </li>
        * </ul>
        *
        * @param brushOrColor The brush or color to use.
        * @param penOrColor The pen or color to use.
        * @param rule The fill rule to use.
        * @return The @see:PdfPaths object.
        */
        fillAndStroke(brushOrColor?: any, penOrColor?: any, rule?: PdfFillRule): PdfPaths;
        /**
        * Strokes the path with the specified pen.
        * If pen is not specified, then the default document pen will be used
        * (See the @see:PdfDocument.setPen method).
        *
        * The penOrColor argument can accept the following values:
        * <ul>
        *   <li>A @see:PdfPen object.</li>
        *   <li>
        *     A @see:wijmo.Color object or any string acceptable by the @see:wijmo.Color.fromString method.
        *     In this case, the @see:PdfPen object with the specified color will be created internally.
        *   </li>
        * </ul>
        *
        * @param penOrColor The pen or color to use.
        * @return The @see:PdfPaths object.
        */
        stroke(penOrColor?: any): PdfPaths;
        _hasPathBuffer(): boolean;
        private _writePathBuffer();
    }
}

declare module wijmo.pdf {
    class _PdfSvgPathHelper {
        static offset(path: string, offset: wijmo.Point): string;
        private static _needToUpdateArgument(cmd, cmdIdx, argIdx);
    }
}

declare module wijmo.pdf {
    class _XhrHelper {
        static arrayBufferAsync(url: string, success: (xhr: XMLHttpRequest, data: ArrayBuffer) => void, error?: (xhr: XMLHttpRequest) => void): void;
        static arrayBuffer(url: string, error?: (xhr: XMLHttpRequest) => void): ArrayBuffer;
        private static _getData(url, settings, success, error?);
    }
}

declare module wijmo.pdf {
    /**
     * Provides arguments for the @see:PdfDocument.end event.
     */
    class PdfDocumentEndedEventArgs extends EventArgs {
        private _blob;
        /**
        * Initializes a new instance of the @see:PdfDocumentEndedEventArgs class.
        *
        * @param blob A Blob object that contains the document data.
        */
        constructor(blob: Blob);
        /**
         * Gets a Blob object that contains the document data.
         */
        blob: Blob;
    }
}

/**
* Defines the @see:PdfDocument class and associated classes.
*/
declare module wijmo.pdf {
    /**
    * Represents a PDF document object, based on <a href="https://github.com/devongovett/pdfkit">PDFKit</a> JavaScript library.
    */
    class PdfDocument extends PdfPageArea {
        private _doc;
        private _docInitialized;
        private _compress;
        private _bufferPages;
        private _chunks;
        private _fontReg;
        private _pageIndex;
        private _ehOnPageAdded;
        private _ehOnPageAdding;
        private _ehOnDocData;
        private _ehOnDocEnding;
        private _ehOnDocEnded;
        private _header;
        private _footer;
        private _graphicsStack;
        private _currentGS;
        private _defPen;
        private _defBrush;
        private _curFont;
        private _defFont;
        /**
        * Initializes a new instance of the @see:PdfDocument class.
        *
        * @param options An optional object containing initialization settings.
        */
        constructor(options?: any);
        /**
        * Gets a value that indicates whether the document compression is enabled.
        * This property can be assigned using the @see:PdfDocument constructor only.
        *
        * The default value is true.
        */
        compress: boolean;
        /**
        * Gets a value that indicates whether the pages buffering mode is enabled which means
        * that the document's pages can be iterated over using @see:pageIndex and @see:bufferedPageRange.
        *
        * This property can be assigned using the @see:PdfDocument constructor only.
        * This property can be set to false only if both @see:header and @see:footer are invisible.
        *
        * The default value is true.
        */
        bufferPages: boolean;
        /**
        * Gets or sets the document information, such as author name, document's creation
        * date and so on.
        */
        info: IPdfDocumentInfo;
        /**
        * Gets an object that represents a header, the page area positioned right below
        * the top margin.
        */
        header: PdfRunningTitle;
        /**
        * Gets an object that represents a footer, the page area positioned right above
        * the bottom margin.
        */
        footer: PdfRunningTitle;
        /**
        * Gets or sets the index of the current page within the buffered pages range.
        *
        * Use the @see:bufferedPageRange method to get the range of buffered pages.
        */
        pageIndex: number;
        /**
        * Gets an object that represents the default page settings for the pages added
        * automatically and for the @see:addPage method.
        */
        pageSettings: IPdfPageSettings;
        /**
        * Occurs when the document has been rendered.
        */
        ended: Event;
        /**
        * Occurs when a new page is added to the document.
        */
        pageAdded: Event;
        /**
        * Raises the @see:end event.
        *
        * @param args A @see:PdfDocumentEndedEventArgs object that contains the event data.
        */
        onEnded(args: PdfDocumentEndedEventArgs): void;
        /**
        * Raises the @see:pageAdded event.
        *
        * @param args A @see:EventArgs object that contains the event data.
        */
        onPageAdded(args: EventArgs): void;
        /**
         * Disposes the document.
         */
        dispose(): void;
        /**
        * Gets an object that represents the current page settings (read-only).
        *
        * @return A @see:IPdfPageSettings object that represents the current page settings.
        */
        currentPageSettings: IPdfPageSettings;
        /**
        * Adds a new page with the given settings.
        *
        * If the settings parameter is omitted, then @see:pageSettings will be used instead.
        *
        * @param settings Page settings.
        * @return The @see:PdfDocument object.
        */
        addPage(settings?: IPdfPageSettings): PdfDocument;
        /**
        * Gets the range of buffered pages.
        * @return A @see:IPdfBufferedPageRange object that represents the range of buffered pages.
        */
        bufferedPageRange(): IPdfBufferedPageRange;
        /**
         * Finishes the document rendering.
         */
        end(): void;
        /**
        * Sets the default document brush.
        * This brush will be used by the @see:PdfPaths.fill, @see:PdfPaths.fillAndStroke and
        * @see:drawText methods, if no specific brush is provided.
        *
        * The brushOrColor argument can accept the following values:
        * <ul>
        *   <li>A @see:PdfBrush object.</li>
        *   <li>
        *     A @see:wijmo.Color object or any string acceptable by the @see:wijmo.Color.fromString method.
        *     In this case, the @see:PdfBrush object with the specified color will be created internally.
        *    </li>
        * </ul>
        *
        * @param brushOrColor The brush or color to use.
        * @return The @see:PdfDocument object.
        */
        setBrush(brushOrColor: any): PdfDocument;
        /**
        * Sets the default document pen.
        * This pen will be used by the @see:PdfPaths.stroke, @see:PdfPaths.fillAndStroke
        * and @see:drawText methods, if no specific pen is provided.
        *
        * The penOrColor argument can accept the following values:
        * <ul>
        *   <li>A @see:PdfPen object.</li>
        *   <li>
        *     A @see:wijmo.Color object or any string acceptable by the @see:wijmo.Color.fromString method.
        *     In this case, the @see:PdfPen object with the specified color will be created internally.
        *   </li>
        * </ul>
        *
        * @param penOrColor The pen or color to use.
        * @return The @see:PdfDocument object.
        */
        setPen(penOrColor: any): PdfDocument;
        /**
        * Sets the document font.
        *
        * If exact font with given style and weight properties is not found then,
        * <ul>
        *   <li>
        *     It tries to search the closest font using
        *     <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight">font weight fallback</a>.
        *   </li>
        *   <li>
        *     If still nothing is found, it tries to find the closest font with other style in following order:
        *     <ul>
        *	    <li><b>'italic'</b>: 'oblique', 'normal'.</li>
        *	    <li><b>'oblique'</b>: 'italic', 'normal'.</li>
        *	    <li><b>'normal'</b>: 'oblique', 'italic'.</li>
        *     </ul>
        *   </li>
        * </ul>
        *
        * @param font The font object to set.
        *
        * @return The @see:PdfDocument object.
        */
        setFont(font: PdfFont): PdfDocument;
        /**
        * Registers a font from a source and associates it with a given font family name
        * and font attributes.
        *
        * @param font The font to register.
        *
        * @return The @see:PdfDocument object.
        */
        registerFont(font: IPdfFontFile): PdfDocument;
        /**
        * Registers a font from a URL asynchronously and associates it with a given font
        * family name and font attributes.
        *
        * The callback function takes a @see:IPdfFontFile object as a parameter.
        *
        * @param font The font to register.
        * @param callback A callback function which will be called, when the font has been
        * registered.
        */
        registerFontAsync(font: IPdfFontFile, callback: Function): void;
        /**
        * Saves the state of the graphic context (including current pen, brush and
        * transformation state) and pushes it onto stack.
        *
        * @return The @see:PdfDocument object.
        */
        saveState(): PdfDocument;
        /**
        * Restores the state from the stack and applies it to the graphic context.
        *
        * @return The @see:PdfDocument object.
        */
        restoreState(): PdfDocument;
        private _runtimeProperties;
        _copy(key: string, value: any): boolean;
        _document: _IPdfKitDocument;
        _switchTextFlowCtx(state: _IPdfTextFlowCtxState): void;
        _getTextFlowCtxState(): _IPdfTextFlowCtxState;
        _toggleBrush(brush?: PdfBrush): void;
        _togglePen(pen?: PdfPen): void;
        _toggleFont(font?: PdfFont): void;
        private _onDocData(chunk);
        private _onDocEnding();
        private _onDocEnded();
        private _onPageAdding(doc, options);
        private _onPageAdded(doc);
        private _assertAreasPathStarted();
        private _pageSettingsToNative(pageSettings);
        private _processHeadersFooters();
        private _renderHeaderFooter(title, macros, isHeader);
        private _renderHeaderFooterPart(title, text, alignment, isHeader);
        private _setCurBrush(brush);
        private _setCurFont(font);
        private _setCurPen(pen);
        private _setNativeDocBrush(brush, strokeOrFill);
        private _resetAreasOffset(doc);
    }
}

